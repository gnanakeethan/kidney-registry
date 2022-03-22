package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
)

type PersonInvestigation struct {
	ID            string         `orm:"column(id);pk"`
	Description   string         `orm:"column(description)"`
	Details       orm.JsonbField `orm:"column(details);null"`
	Procedure     orm.JsonbField `orm:"column(procedure);null"`
	Results       orm.JsonbField `orm:"column(results);null"`
	Investigation *Investigation `orm:"column(investigation_id);rel(fk)"`
	Person        *Person        `orm:"column(person_id);rel(fk)"`
	ValidDays     int            `orm:"column(valid_days);null"`
	ExpectedDate  time.Time      `orm:"column(expected_date);type(timestamp);null"`
	ObtainedDate  time.Time      `orm:"column(obtained_date);type(timestamp);null"`
	CreatedAt     time.Time      `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt     time.Time      `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt     time.Time      `orm:"column(deleted_at);null"`
}

func (t PersonInvestigation) IsNode() {
	fmt.Println("This is an item")
}
func (PersonInvestigation) IsDynamicFormInterface() {}

func (t *PersonInvestigation) TableName() string {
	return "person_investigations"
}

func init() {
	orm.RegisterModel(new(PersonInvestigation))
}

// AddPersonInvestigations insert a new PersonInvestigation into database and returns
// last inserted ID on success.
func AddPersonInvestigations(m *PersonInvestigation) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonInvestigationsById retrieves PersonInvestigation by ID. Returns error if
// ID doesn't exist
func GetPersonInvestigationsById(id string) (v *PersonInvestigation, err error) {
	o := orm.NewOrm()
	v = &PersonInvestigation{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonInvestigations retrieves all PersonInvestigation matches certain condition. Returns empty list if
// no records exist
func GetAllPersonInvestigations(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonInvestigation))
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
	
	var l []PersonInvestigation
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

// UpdatePersonInvestigations updates PersonInvestigation by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonInvestigationById(m *PersonInvestigation) (err error) {
	o := orm.NewOrm()
	v := &PersonInvestigation{ID: m.ID}
	if err = o.Read(v); err == nil {
		v.Procedure = m.Procedure
		v.Details = m.Details
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

// DeletePersonInvestigations deletes PersonInvestigation by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonInvestigations(id string) (err error) {
	o := orm.NewOrm()
	v := PersonInvestigation{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonInvestigation{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
