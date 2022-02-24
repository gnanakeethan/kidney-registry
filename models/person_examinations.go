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

type PersonExamination struct {
	ID          string         `orm:"column(id);pk"`
	Description string         `orm:"column(description)"`
	Details     orm.JsonbField `orm:"column(details);null"`
	Results     orm.JsonbField `orm:"column(results);null"`
	Examination *Examination   `orm:"column(examination_id);rel(fk)"`
	Person      *Person        `orm:"column(person_id);rel(fk)"`
	Procedure   orm.JsonbField `orm:"column(procedure);null"`
	CreatedAt   time.Time      `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt   time.Time      `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt   time.Time      `orm:"column(deleted_at);null"`
}

func (PersonExamination) IsDynamicFormInterface() {}

func (t *PersonExamination) TableName() string {
	return "person_examinations"
}

func init() {
	orm.RegisterModel(new(PersonExamination))
}

// AddPersonExaminations insert a new PersonExamination into database and returns
// last inserted ID on success.
func AddPersonExaminations(m *PersonExamination) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonExaminationsById retrieves PersonExamination by ID. Returns error if
// ID doesn't exist
func GetPersonExaminationsById(id string) (v *PersonExamination, err error) {
	o := orm.NewOrm()
	v = &PersonExamination{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

func ListPersonExaminations(ctx context.Context, filter *PersonExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*OrderBy) (*PersonExaminationList, error) {
	personExamination, personExaminations := PersonExamination{}, []*PersonExamination{}
	filterPtr := PersonExaminationFilter{}
	if filter != nil {
		filterPtr = *filter
	}
	query, currentPage, perPage, preloads := extractQuery(ctx, personExamination, filterPtr, page, limit)
	pretty.Println(preloads)
	qs, totalItems, err := GetAnyAll(personExamination, query, sortBy, orderBy, (currentPage-1)*perPage, perPage)
	if err != nil {
		return nil, err
	}
	if _, err := qs.RelatedSel("Person").All(&personExaminations, preloads...); err != nil {
		return nil, err
	}
	pagination := getPagination(currentPage, totalItems, perPage)
	return &PersonExaminationList{
		Items:      personExaminations,
		Pagination: pagination,
	}, nil
}

// GetAllPersonExaminations retrieves all PersonExamination matches certain condition. Returns empty list if
// no records exist
func GetAllPersonExaminations(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonExamination))
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
	
	var l []PersonExamination
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

// UpdatePersonExaminations updates PersonExamination by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonExaminationById(m *PersonExamination) (err error) {
	o := orm.NewOrm()
	v := &PersonExamination{ID: m.ID}
	if err = o.Read(v); err == nil {
		updatedFields := getUpdatedFields(*m, *v)
		if len(updatedFields) > 0 {
			if num, err2 := o.Update(m, updatedFields...); err2 == nil {
				fmt.Println("Number of records updated in database:", num)
				return err2
			}
		}
	}
	return
}

// DeletePersonExaminations deletes PersonExamination by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonExaminations(id string) (err error) {
	o := orm.NewOrm()
	v := PersonExamination{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonExamination{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
