package models

import (
	"errors"
	"fmt"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
)

type Person struct {
	Id                  string    `orm:"column(id);pk"`
	FirstName           string    `orm:"column(first_name)"`
	LastName            string    `orm:"column(last_name);null"`
	Address             string    `orm:"column(address);null"`
	DateOfBirth         time.Time `orm:"column(date_of_birth);type(date);null"`
	Ethnicity           string    `orm:"column(ethnicity);null"`
	Phn                 string    `orm:"column(phn)"`
	PrimaryRenalDisease string    `orm:"column(primary_renal_disease);null"`
	Weight              float64   `orm:"column(weight);null"`
	Height              float64   `orm:"column(height);null"`
	Sex                 string    `orm:"column(sex);null"`
	MaritalStatus       string    `orm:"column(marital_status)"`
	ContactNo           string    `orm:"column(contact_no);null"`
	PersonType          string    `orm:"column(person_type);null"`
}

func (t *Person) TableName() string {
	return "persons"
}

func init() {
	orm.RegisterModel(new(Person))
}

// AddPersons insert a new Person into database and returns
// last inserted Id on success.
func AddPersons(m *Person) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonsById retrieves Person by Id. Returns error if
// Id doesn't exist
func GetPersonsById(id string) (v *Person, err error) {
	o := orm.NewOrm()
	v = &Person{Id: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersons retrieves all Person matches certain condition. Returns empty list if
// no records exist
func GetAllPersons(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (l []*Person, totalItems int64, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(Person))
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
	if _, err = qs.Limit(limit, offset).All(&l, fields...); err == nil {
		return
	}
	return
}

// UpdatePersons updates Person by Id and returns error if
// the record to be updated doesn't exist
func UpdatePersonsById(m *Person) (err error) {
	o := orm.NewOrm()
	v := Person{Id: m.Id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersons deletes Person by Id and returns error if
// the record to be deleted doesn't exist
func DeletePersons(id string) (err error) {
	o := orm.NewOrm()
	v := Person{Id: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&Person{Id: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
