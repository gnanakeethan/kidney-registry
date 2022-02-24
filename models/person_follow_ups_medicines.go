package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
)

type PersonFollowUpsMedicine struct {
	ID           string          `orm:"column(id);pk"`
	MedicineCode string          `orm:"column(medicine_code)"`
	Name         string          `orm:"column(name);null"`
	Dosage       string          `orm:"column(dosage);null"`
	Frequency    string          `orm:"column(frequency);null"`
	Duration     string          `orm:"column(duration);null"`
	StartDate    time.Time       `orm:"column(start_date);type(timestamp);null"`
	EndDate      time.Time       `orm:"column(end_date);type(timestamp);null"`
	FollowUpId   *PersonFollowUp `orm:"column(follow_up_id);rel(fk)"`
	CreatedAt    time.Time       `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt    time.Time       `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt    time.Time       `orm:"column(deleted_at);null"`
}

func (t *PersonFollowUpsMedicine) TableName() string {
	return "person_follow_ups_medicines"
}

func init() {
	orm.RegisterModel(new(PersonFollowUpsMedicine))
}

// AddPersonFollowUpsMedicines insert a new PersonFollowUpsMedicine into database and returns
// last inserted ID on success.
func AddPersonFollowUpsMedicines(m *PersonFollowUpsMedicine) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonFollowUpsMedicinesById retrieves PersonFollowUpsMedicine by ID. Returns error if
// ID doesn't exist
func GetPersonFollowUpsMedicinesById(id string) (v *PersonFollowUpsMedicine, err error) {
	o := orm.NewOrm()
	v = &PersonFollowUpsMedicine{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonFollowUpsMedicines retrieves all PersonFollowUpsMedicine matches certain condition. Returns empty list if
// no records exist
func GetAllPersonFollowUpsMedicines(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonFollowUpsMedicine))
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
	
	var l []PersonFollowUpsMedicine
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

// UpdatePersonFollowUpsMedicines updates PersonFollowUpsMedicine by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonFollowUpsMedicinesById(m *PersonFollowUpsMedicine) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUpsMedicine{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonFollowUpsMedicines deletes PersonFollowUpsMedicine by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonFollowUpsMedicines(id string) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUpsMedicine{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonFollowUpsMedicine{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
