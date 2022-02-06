package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"

	"github.com/beego/beego/v2/client/orm"
)

type PersonFollowUpsExaminations struct {
	Id            int              `orm:"column(id);pk"`
	Description   string           `orm:"column(description)"`
	Details       string           `orm:"column(details);null"`
	Results       string           `orm:"column(results);null"`
	ExaminationId *Examinations    `orm:"column(examination_id);rel(fk)"`
	Procedure     string           `orm:"column(procedure);null"`
	FollowUpId    *PersonFollowUps `orm:"column(follow_up_id);rel(fk)"`
}

func (t *PersonFollowUpsExaminations) TableName() string {
	return "person_follow_ups_examinations"
}

func init() {
	orm.RegisterModel(new(PersonFollowUpsExaminations))
}

// AddPersonFollowUpsExaminations insert a new PersonFollowUpsExaminations into database and returns
// last inserted Id on success.
func AddPersonFollowUpsExaminations(m *PersonFollowUpsExaminations) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonFollowUpsExaminationsById retrieves PersonFollowUpsExaminations by Id. Returns error if
// Id doesn't exist
func GetPersonFollowUpsExaminationsById(id int) (v *PersonFollowUpsExaminations, err error) {
	o := orm.NewOrm()
	v = &PersonFollowUpsExaminations{Id: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonFollowUpsExaminations retrieves all PersonFollowUpsExaminations matches certain condition. Returns empty list if
// no records exist
func GetAllPersonFollowUpsExaminations(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonFollowUpsExaminations))
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

	var l []PersonFollowUpsExaminations
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

// UpdatePersonFollowUpsExaminations updates PersonFollowUpsExaminations by Id and returns error if
// the record to be updated doesn't exist
func UpdatePersonFollowUpsExaminationsById(m *PersonFollowUpsExaminations) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUpsExaminations{Id: m.Id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonFollowUpsExaminations deletes PersonFollowUpsExaminations by Id and returns error if
// the record to be deleted doesn't exist
func DeletePersonFollowUpsExaminations(id int) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUpsExaminations{Id: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonFollowUpsExaminations{Id: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
