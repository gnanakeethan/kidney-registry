package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
)

type PersonWorkup struct {
	ID             string         `orm:"column(id);pk"`
	Workup         *Workup        `orm:"column(workup_id);rel(fk)"`
	Person         *Person        `orm:"column(person_id);rel(fk)"`
	Procedure      orm.JsonbField `orm:"column(procedure)"`
	Details        orm.JsonbField `orm:"column(details)"`
	Results        orm.JsonbField `orm:"column(results)"`
	Comments       string         `orm:"column(comments);null"`
	InitiationDate time.Time      `orm:"column(initiation_date);type(timestamp);null"`
	ActivationDate time.Time      `orm:"column(activation_date);type(timestamp);null"`
	CreatedAt      time.Time      `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt      time.Time      `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt      time.Time      `orm:"column(deleted_at);null"`
}

func (t PersonWorkup) IsNode() {
	fmt.Println("This is an item")
}
func (PersonWorkup) IsDynamicFormInterface() {}

func (t *PersonWorkup) TableName() string {
	return "person_workups"
}

func init() {
	orm.RegisterModel(new(PersonWorkup))
}

// AddPersonWorkups insert a new PersonWorkup into database and returns
// last inserted ID on success.
func AddPersonWorkups(m *PersonWorkup) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonWorkupsById retrieves PersonWorkup by ID. Returns error if
// ID doesn't exist
func GetPersonWorkupsById(id string) (v *PersonWorkup, err error) {
	o := orm.NewOrm()
	v = &PersonWorkup{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonWorkups retrieves all PersonWorkup matches certain condition. Returns empty list if
// no records exist
func GetAllPersonWorkups(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonWorkup))
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
	
	var l []PersonWorkup
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

// UpdatePersonWorkups updates PersonWorkup by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonWorkupById(m *PersonWorkup) (err error) {
	o := orm.NewOrm()
	v := &PersonWorkup{ID: m.ID}
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

// DeletePersonWorkups deletes PersonWorkup by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonWorkups(id string) (err error) {
	o := orm.NewOrm()
	v := PersonWorkup{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonWorkup{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
