package models

import (
	"context"
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
)

type Investigation struct {
	ID        string         `orm:"column(id);pk"`
	Details   orm.JsonbField `orm:"column(details);null"`
	Procedure orm.JsonbField `orm:"column(procedure);null"`
	Order     int            `orm:"column(order);null"`
	CreatedAt time.Time      `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt time.Time      `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt time.Time      `orm:"column(deleted_at);null"`
}

func (Investigation) IsDynamicFormInterface() {}

func (t *Investigation) TableName() string {
	return "investigations"
}

func init() {
	orm.RegisterModel(new(Investigation))
}

// AddInvestigations insert a new Investigation into database and returns
// last inserted ID on success.
func AddInvestigations(m *Investigation) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetInvestigationsById retrieves Investigation by ID. Returns error if
// ID doesn't exist
func GetInvestigationsById(id string) (v *Investigation, err error) {
	o := orm.NewOrm()
	v = &Investigation{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

func ListInvestigations(ctx context.Context, filter *InvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*OrderBy) (*InvestigationList, error) {
	investigation, investigations := Investigation{}, []*Investigation{}
	filterPtr := InvestigationFilter{}
	if filter != nil {
		filterPtr = *filter
	}
	query, currentPage, perPage, preloads := extractQuery(ctx, investigation, filterPtr, page, limit)
	pretty.Println(preloads)
	qs, totalItems, err := GetAnyAll(investigation, query, sortBy, orderBy, (currentPage-1)*perPage, perPage)
	if err != nil {
		return nil, err
	}
	if _, err := qs.All(&investigations, preloads...); err != nil {
		return nil, err
	}
	pagination := getPagination(currentPage, totalItems, perPage)
	return &InvestigationList{
		Items:      investigations,
		Pagination: pagination,
	}, nil
}

// GetAllInvestigations retrieves all Investigation matches certain condition. Returns empty list if
// no records exist
func GetAllInvestigations(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(Investigation))
	// query k=v
	for k, v := range query {
		// rewrite dot-notation to Object__Attribute
		k = strings.Replace(k, ".", "__", -1)
		if strings.Contains(k, "isnull") {
			qs = qs.Filter(k, v == "true" || v == "1")
		} else {
			qs = qs.Filter(k, v)
		}
	}
	// order by:
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
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
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
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
		} else if len(sortby) != len(order) && len(order) != 1 {
			return nil, errors.New("Error: 'sortby', 'order' sizes mismatch or 'order' size is not 1")
		}
	} else {
		if len(order) != 0 {
			return nil, errors.New("Error: unused 'order' fields")
		}
	}
	
	var l []Investigation
	qs = qs.OrderBy(sortFields...)
	if _, err = qs.Limit(limit, offset).All(&l, fields...); err == nil {
		if len(fields) == 0 {
			for _, v := range l {
				ml = append(ml, v)
			}
		} else {
			// trim unused fields
			for _, v := range l {
				m := make(map[string]interface{})
				val := reflect.ValueOf(v)
				for _, fname := range fields {
					m[fname] = val.FieldByName(fname).Interface()
				}
				ml = append(ml, m)
			}
		}
		return ml, nil
	}
	return nil, err
}

// UpdateInvestigations updates Investigation by ID and returns error if
// the record to be updated doesn't exist
func UpdateInvestigationsById(m *Investigation) (err error) {
	o := orm.NewOrm()
	v := Investigation{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeleteInvestigations deletes Investigation by ID and returns error if
// the record to be deleted doesn't exist
func DeleteInvestigations(id string) (err error) {
	o := orm.NewOrm()
	v := Investigation{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&Investigation{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
