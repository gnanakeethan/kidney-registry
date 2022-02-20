package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	
	"github.com/beego/beego/v2/client/orm"
)

type PersonAllergy struct {
	ID        int        `orm:"column(id);pk"`
	PersonId  *Person    `orm:"column(person_id);rel(fk)"`
	AllergyId *Allergies `orm:"column(allergy_id);rel(fk)"`
	Note      string     `orm:"column(note);null"`
}

func (t *PersonAllergy) TableName() string {
	return "person_allergy"
}

func init() {
	orm.RegisterModel(new(PersonAllergy))
}

// AddPersonAllergy insert a new PersonAllergy into database and returns
// last inserted ID on success.
func AddPersonAllergy(m *PersonAllergy) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonAllergyById retrieves PersonAllergy by ID. Returns error if
// ID doesn't exist
func GetPersonAllergyById(id int) (v *PersonAllergy, err error) {
	o := orm.NewOrm()
	v = &PersonAllergy{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonAllergy retrieves all PersonAllergy matches certain condition. Returns empty list if
// no records exist
func GetAllPersonAllergy(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonAllergy))
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
	
	var l []PersonAllergy
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

// UpdatePersonAllergy updates PersonAllergy by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonAllergyById(m *PersonAllergy) (err error) {
	o := orm.NewOrm()
	v := PersonAllergy{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonAllergy deletes PersonAllergy by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonAllergy(id int) (err error) {
	o := orm.NewOrm()
	v := PersonAllergy{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonAllergy{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
