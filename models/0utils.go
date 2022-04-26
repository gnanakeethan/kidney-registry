package models

import (
	"context"
	"errors"
	"fmt"
	"reflect"
	"strings"
	
	"github.com/99designs/gqlgen/graphql"
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
)

func PointerToString(medications *string) string {
	if medications != nil {
		return *medications
	}
	return ""
}
func getPagination(currentPage int64, totalItems int64, perPage int64) *Pagination {
	prevPage := 0
	if currentPage > 0 {
		prevPage = int(currentPage - 1)
	}
	nextPage := 0
	if int(currentPage) <= int(totalItems/perPage) {
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

func extractQuery[F Model, T FilterInput](ctx context.Context, object F, filter T, page *int, limit *int) (*orm.Condition, int64, int64, []string) {
	currentPage := int64(1)
	perPage := int64(15)
	preloads := GetPreloads(ctx, object)
	if page != nil {
		currentPage = int64(*page)
	}
	if limit != nil {
		perPage = int64(*limit)
	}
	if reflect.ValueOf(filter).IsNil() {
		return orm.NewCondition(), currentPage, perPage, preloads
	}
	
	query := extractFilter("", filter)
	return query, currentPage, perPage, preloads
}

func extractFilter[T FilterInput](prefix string, filterInterface T) *orm.Condition {
	condition := orm.NewCondition()
	v := reflect.ValueOf(filterInterface)
	var fields []reflect.StructField
	if v.Kind() == reflect.Ptr {
		v = v.Elem()
		fields = reflect.VisibleFields(reflect.TypeOf(filterInterface).Elem())
	} else {
		fields = reflect.VisibleFields(reflect.TypeOf(filterInterface))
	}
	for _, j := range fields {
		fieldValInterface := v.FieldByName(j.Name).Interface()
		pretty.Println(j.Name, fieldValInterface)
		if fieldValInterface != nil {
			fieldVal := reflect.ValueOf(fieldValInterface).Elem()
			if fieldVal.IsValid() {
				notCustom := false
				comparison := "EQUAL"
				pretty.Println("TYPE", fieldVal.Type().String())
				pretty.Println("INTERFACE", fieldVal.Interface())
				fieldValType := fieldVal.Type().String()
				comparison = fieldVal.FieldByName("Comparison").String()
				if StringInSlice(fieldValType, []string{"models.StringFilter", "models.FloatFilter", "models.IntFilter"}) {
					notCustom = true
				}
				if StringInSlice(j.Name, []string{"And", "Or", "AndNot", "OrNot"}) {
					switch j.Name {
					case "Or":
						condition = condition.OrCond(extractFilter("", fieldVal.Interface().(T)))
					case "OrNot":
						condition = condition.OrNotCond(extractFilter("", fieldVal.Interface().(T)))
					case "And":
						condition = condition.AndCond(extractFilter("", fieldVal.Interface().(T)))
					case "AndNot":
						condition = condition.AndNotCond(extractFilter("", fieldVal.Interface().(T)))
					}
					
				} else if notCustom {
					switch comparison {
					case "EQUAL":
						condition = condition.And(prefix+j.Name, fieldVal.FieldByName("Value").Elem().String())
						break
					case "NOT_EQUAL":
						condition = condition.AndNot(prefix+j.Name, fieldVal.FieldByName("Value").Elem().String())
						break
					case "GREATER_THAN":
						condition = condition.And(prefix+j.Name+"__gt", fieldVal.FieldByName("Value").Elem().String())
						break
					case "GREATER_THAN_OR_EQUAL":
						condition = condition.And(prefix+j.Name+"__gte", fieldVal.FieldByName("Value").Elem().String())
						break
					case "LESS_THAN":
						condition = condition.And(prefix+j.Name+"__lt", fieldVal.FieldByName("Value").Elem().String())
						break
					case "LESS_THAN_OR_EQUAL":
						condition = condition.And(prefix+j.Name+"__lte", fieldVal.FieldByName("Value").Elem().String())
						break
					case "BETWEEN":
						// condition[j.Name+"__between"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "CONTAINS":
						condition = condition.And(prefix+j.Name+"__contains", fieldVal.FieldByName("Value").Elem().String())
						break
					case "ICONTAINS":
						condition = condition.And(prefix+j.Name+"__icontains", fieldVal.FieldByName("Value").Elem().String())
						break
					case "STARTS_WITH":
						condition = condition.And(prefix+j.Name+"__startswith", fieldVal.FieldByName("Value").Elem().String())
						break
					case "ENDS_WITH":
						condition = condition.And(prefix+j.Name+"__endswith", fieldVal.FieldByName("Value").Elem().String())
						break
					}
				} else {
					pretty.Println("PULLING IN", fieldVal.Interface())
					condition = condition.AndCond(extractFilter(j.Name+"__", fieldVal.Interface()))
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
	pretty.Println(fields)
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
func GetAnyAll(object interface{}, query *orm.Condition, sortby []*string, order []*OrderBy,
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
				if *order[i] == "desc" {
					orderby = "-" + *v
				} else if *order[i] == "asc" {
					orderby = *v
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
				if *order[0] == "desc" {
					orderby = "-" + *v
				} else if *order[0] == "asc" {
					orderby = *v
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

type Model interface {
	Examination | Investigation | Person | PersonExamination | PersonInvestigation | PersonMedicalHistory | PersonOrganDonation | PersonWorkup | User | Workup | PersonFollowUp | Workflow
	IsNode()
}
type FilterInput interface {
	any | ExaminationFilter | InvestigationFilter | PersonFilter | PersonExaminationFilter | PersonFollowUpFilter | PersonInvestigationFilter | PersonMedicalHistoryFilter | PersonOrganDonationFilter | PersonWorkupFilter | WorkupFilter | UserFilter | WorkflowFilter
}

type ListOutput interface {
	*ExaminationList | *PersonList | *PersonExaminationList | *PersonFollowUpList | *PersonInvestigationList | *PersonMedicalHistoryList | *PersonOrganDonationList | *PersonWorkupList | *UserList | *WorkupList | *InvestigationList | *WorkflowList
}
type EdgeType interface {
	ExaminationEdge | InvestigationEdge | PersonEdge | PersonExaminationEdge | PersonInvestigationEdge | PersonMedicalHistoryEdge | PersonOrganDonationEdge | PersonWorkupEdge | UserEdge | WorkupEdge | PersonFollowUpEdge | WorkflowEdge
}

func GetAnyById[T Model](v T) (*T, error) {
	o := orm.NewOrm()
	if err := o.Read(&v); err == nil {
		return &v, nil
	} else {
		return nil, err
	}
}

func ListAnyGenerics[T Model, F FilterInput, G EdgeType, H ListOutput](ctx context.Context, object T, filter F, edgeType G, listOutput H, page *int, limit *int, sortBy []*string, orderBy []*OrderBy, preloads []string, relatedSel ...interface{}) (H, error) {
	// func ListAnyGenerics(ctx context.Context, object T, filter F, edgeType G, listOutput H, page *int, limit *int, sortBy []*string, orderBy []*OrderBy, , relatedSel ...interface{}) (H, error) {
	var list []*T
	query, currentPage, perPage, preload := extractQuery(ctx, object, filter, page, limit)
	preload = append(preload, preloads...)
	qs, _, err := GetAnyAllGenerics(object, query, sortBy, orderBy, (currentPage-1)*perPage, perPage)
	if listOutput == nil {
		return nil, errors.New("ListOutput is nil")
	}
	if err != nil {
		return listOutput, err
	}
	if _, err := qs.RelatedSel(relatedSel...).All(&list, preload...); err != nil {
		return listOutput, err
	}
	var listEdges []*G
	for _, v := range list {
		edgeType := new(G)
		reflect.ValueOf(edgeType).Elem().FieldByName("Node").Set(reflect.ValueOf(v))
		listEdges = append(listEdges, edgeType)
	}
	reflect.ValueOf(listOutput).Elem().FieldByName("Items").Set(reflect.ValueOf(listEdges))
	return listOutput, nil
}

// Gets any type of object and destructures query.
func GetAnyAllGenerics[T Model](object T, query *orm.Condition, sortby []*string, order []*OrderBy,
	offset int64, limit int64) (qs orm.QuerySeter, totalItems int64, err error) {
	o := orm.NewOrm()
	qs = o.QueryTable(object)
	qs = qs.SetCond(query)
	var sortFields []string
	if len(sortby) != 0 {
		if len(sortby) == len(order) {
			// 1) for each sort field, there is an associated order
			for i, v := range sortby {
				orderby := ""
				if *order[i] == "desc" {
					orderby = "-" + *v
				} else if *order[i] == "asc" {
					orderby = *v
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
				if *order[0] == "desc" {
					orderby = "-" + *v
				} else if *order[0] == "asc" {
					orderby = *v
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

func getUpdatedFields(m interface{}, v interface{}) []string {
	v1 := reflect.ValueOf(v)
	v2 := reflect.ValueOf(m)
	t := reflect.TypeOf(v)
	updatedFields := []string{}
	for i := 0; i < v1.NumField(); i++ {
		if v2.Field(i).Interface() != v1.Field(i).Interface() {
			name := t.Field(i).Name
			if !StringInSlice(name, []string{"Phn", "CreatedAt", "UpdatedAt", "DeletedAt"}) {
				updatedFields = append(updatedFields, name)
				fmt.Printf("%v ", t.Field(i).Name)
				fmt.Printf("old: %v ", v1.Field(i))
				fmt.Printf("new: %v ", v2.Field(i))
				fmt.Println("")
			}
		}
	}
	return updatedFields
}
