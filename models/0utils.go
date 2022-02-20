package models

import (
	"context"
	"errors"
	"reflect"
	"strings"
	
	"github.com/99designs/gqlgen/graphql"
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
)

func getPagination(currentPage int64, totalItems int64, perPage int64) *Pagination {
	prevPage := 0
	if int(totalItems/perPage) > int(currentPage) {
		prevPage = int(currentPage - 1)
	}
	nextPage := 0
	if int(currentPage+1) <= int(totalItems/perPage) {
		nextPage = int(currentPage + 1)
	}
	pagination := &Pagination{
		CurrentPage:  int(currentPage),
		PrevPage:     prevPage,
		NextPage:     nextPage,
		TotalItems:   int(totalItems),
		ItemsPerPage: int(perPage),
	}
	return pagination
}

func extractQuery(ctx context.Context, object, filter interface{}, page *int, limit *int) (*orm.Condition, int64, int64, []string) {
	query := extractFilter(filter)
	currentPage := int64(1)
	perPage := int64(15)
	preloads := GetPreloads(ctx, object)
	if page != nil {
		currentPage = int64(*page)
	}
	if limit != nil {
		perPage = int64(*limit)
	}
	return query, currentPage, perPage, preloads
}

func extractFilter(filterInterface interface{}) *orm.Condition {
	filter := &filterInterface
	condition := orm.NewCondition()
	if filter != nil {
		fields := reflect.VisibleFields(reflect.TypeOf(filterInterface))
		v := reflect.ValueOf(*filter)
		for _, j := range fields {
			fieldValInterface := v.FieldByName(j.Name).Interface()
			if fieldValInterface != nil {
				fieldVal := reflect.ValueOf(fieldValInterface).Elem()
				if fieldVal.IsValid() {
					comparision := fieldVal.FieldByName("Comparison").String()
					pretty.Println(j.Name)
					if StringInSlice(j.Name, []string{"And", "Or", "AndNot", "OrNot"}) {
						pretty.Println(fieldVal.Interface())
						switch j.Name {
						case "Or":
							condition = condition.OrCond(extractFilter(fieldVal.Interface()))
						case "OrNot":
							condition = condition.OrNotCond(extractFilter(fieldVal.Interface()))
						case "And":
							condition = condition.AndCond(extractFilter(fieldVal.Interface()))
						case "AndNot":
							condition = condition.AndNotCond(extractFilter(fieldVal.Interface()))
						}
					} else {
						switch comparision {
						case "EQUAL":
							condition = condition.And(j.Name, fieldVal.FieldByName("Value").Elem().String())
							break
						case "NOT_EQUAL":
							condition = condition.AndNot(j.Name, fieldVal.FieldByName("Value").Elem().String())
							break
						case "GREATER_THAN":
							condition = condition.And(j.Name+"__gt", fieldVal.FieldByName("Value").Elem().String())
							break
						case "GREATER_THAN_OR_EQUAL":
							condition = condition.And(j.Name+"__gte", fieldVal.FieldByName("Value").Elem().String())
							break
						case "LESS_THAN":
							condition = condition.And(j.Name+"__lt", fieldVal.FieldByName("Value").Elem().String())
							break
						case "LESS_THAN_OR_EQUAL":
							condition = condition.And(j.Name+"__lte", fieldVal.FieldByName("Value").Elem().String())
							break
						case "BETWEEN":
							// condition.And(j.Name+"__gt", fieldVal.FieldByName("Value").Elem().String())
							// condition.And(j.Name+"__lt", fieldVal.FieldByName("Value").Elem().String())
							// condition[j.Name+"__between"] = fieldVal.FieldByName("Value").Elem().String()
							break
						case "CONTAINS":
							condition = condition.And(j.Name+"__contains", fieldVal.FieldByName("Value").Elem().String())
							break
						case "ICONTAINS":
							condition = condition.And(j.Name+"__icontains", fieldVal.FieldByName("Value").Elem().String())
							break
						case "STARTS_WITH":
							condition = condition.And(j.Name+"__startswith", fieldVal.FieldByName("Value").Elem().String())
							break
						case "ENDS_WITH":
							condition = condition.And(j.Name+"__endswith", fieldVal.FieldByName("Value").Elem().String())
							break
						}
					}
				}
				
			}
		}
	}
	return condition
}

func StringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}
func GetPreloads(ctx context.Context, object interface{}) []string {
	fields := GetNestedPreloads(
		graphql.GetOperationContext(ctx),
		graphql.CollectFieldsCtx(ctx, nil),
		"",
	)
	fieldsFiltered := []string{}
	visibleFieldsStructs := reflect.VisibleFields(reflect.TypeOf(object))
	visibleFields := []string{}
	for _, i := range visibleFieldsStructs {
		visibleFields = append(visibleFields, i.Name)
	}
	for _, i := range fields {
		if strings.Count(i, ".") == 1 {
			i = strings.Split(i, ".")[1]
			if StringInSlice(i, visibleFields) {
				fieldsFiltered = append(fieldsFiltered, i)
			}
		}
	}
	return fieldsFiltered
}

func GetNestedPreloads(ctx *graphql.OperationContext, fields []graphql.CollectedField, prefix string) (preloads []string) {
	for _, column := range fields {
		prefixColumn := GetPreloadString(prefix, column.Name)
		if !strings.Contains(prefixColumn, "pagination") {
			preloads = append(preloads, prefixColumn)
			preloads = append(preloads, GetNestedPreloads(ctx, graphql.CollectFields(ctx, column.Selections, nil), prefixColumn)...)
		}
	}
	return
}

func GetPreloadString(prefix, name string) string {
	if len(prefix) > 0 {
		return prefix + "." + name
	}
	return name
}

// Gets any type of object and destructures query.
func GetAnyAll(object interface{}, query *orm.Condition, sortby []string, order []string,
	offset int64, limit int64) (qs orm.QuerySeter, totalItems int64, err error) {
	o := orm.NewOrm()
	typeOf := reflect.TypeOf(object)
	qs = o.QueryTable(reflect.New(typeOf).Interface())
	qs = qs.SetCond(query)
	var sortFields []string
	if len(sortby) != 0 {
		if len(sortby) == len(order) {
			// 1) for each sort field, there is an associated order
			for i, v := range sortby {
				orderby := ""
				if order[i] == "desc" {
					orderby = "-" + v
				} else if order[i] == "asc" {
					orderby = v
				} else {
					return nil, 0, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
			qs = qs.OrderBy(sortFields...)
		} else if len(sortby) != len(order) && len(order) == 1 {
			// 2) there is exactly one order, all the sorted fields will be sorted by this order
			for _, v := range sortby {
				orderby := ""
				if order[0] == "desc" {
					orderby = "-" + v
				} else if order[0] == "asc" {
					orderby = v
				} else {
					return nil, 0, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
		} else if len(sortby) != len(order) && len(order) != 1 {
			return nil, 0, errors.New("Error: 'sortby', 'order' sizes mismatch or 'order' size is not 1")
		}
	} else {
		if len(order) != 0 {
			return nil, 0, errors.New("Error: unused 'order' fields")
		}
	}
	
	qs = qs.OrderBy(sortFields...)
	totalItems, _ = qs.Count()
	qs = qs.Limit(limit, offset)
	return
}