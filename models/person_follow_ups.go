package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"

	"github.com/beego/beego/v2/client/orm"
)

type PersonFollowUps struct {
	Id            int                  `orm:"column(id);pk"`
	ClinicNo      string               `orm:"column(clinic_no)"`
	Description   string               `orm:"column(description);null"`
	PersonId      *Persons             `orm:"column(person_id);rel(fk)"`
	Complaints    string               `orm:"column(complaints);null"`
	RenalBiopsies string               `orm:"column(renal_biopsies);null"`
	CaseStatus    string               `orm:"column(case_status);null"`
	DonationId    *PersonOrganDonation `orm:"column(donation_id);rel(fk)"`
}

func (t *PersonFollowUps) TableName() string {
	return "person_follow_ups"
}

func init() {
	orm.RegisterModel(new(PersonFollowUps))
}

// AddPersonFollowUps insert a new PersonFollowUps into database and returns
// last inserted Id on success.
func AddPersonFollowUps(m *PersonFollowUps) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonFollowUpsById retrieves PersonFollowUps by Id. Returns error if
// Id doesn't exist
func GetPersonFollowUpsById(id int) (v *PersonFollowUps, err error) {
	o := orm.NewOrm()
	v = &PersonFollowUps{Id: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonFollowUps retrieves all PersonFollowUps matches certain condition. Returns empty list if
// no records exist
func GetAllPersonFollowUps(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonFollowUps))
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

	var l []PersonFollowUps
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

// UpdatePersonFollowUps updates PersonFollowUps by Id and returns error if
// the record to be updated doesn't exist
func UpdatePersonFollowUpsById(m *PersonFollowUps) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUps{Id: m.Id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonFollowUps deletes PersonFollowUps by Id and returns error if
// the record to be deleted doesn't exist
func DeletePersonFollowUps(id int) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUps{Id: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonFollowUps{Id: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
