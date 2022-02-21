package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
	"github.com/segmentio/ksuid"
)

type PersonMedicalHistory struct {
	ID          string      `orm:"column(id);pk"`
	Person      *Person     `orm:"column(person_id);rel(fk)"`
	Description string      `orm:"column(description);null"`
	Reason      string      `orm:"column(reason);null"`
	StartDate   time.Time   `orm:"column(start_date);null"`
	EndDate     time.Time   `orm:"column(end_date);null"`
	Medications string      `orm:"column(medications);null"`
	Type        HistoryType `orm:"column(type);null"`
}

func (t *PersonMedicalHistory) TableName() string {
	return "person_medical_history"
}

func init() {
	orm.RegisterModel(new(PersonMedicalHistory))
}

// AddPersonMedicalHistory insert a new PersonMedicalHistory into database and returns
// last inserted ID on success.
func AddPersonMedicalHistory(m *PersonMedicalHistoryInput) (id int64, err error) {
	o := orm.NewOrm()
	startDate, _ := time.Parse("2006-01-02", *m.StartDate)
	endDate, _ := time.Parse("2006-01-02", *m.EndDate)
	idString := *m.ID
	if idString == "" {
		idString = ksuid.New().String()
	}
	personMedicalHistory := &PersonMedicalHistory{
		ID:          idString,
		Person:      &Person{ID: m.Person.ID},
		Description: *m.Description,
		Reason:      *m.Reason,
		StartDate:   startDate,
		EndDate:     endDate,
		Medications: *m.Medications,
		Type:        *m.Type,
	}
	id, err = o.Insert(personMedicalHistory)
	return
}

// GetPersonMedicalHistoryById retrieves PersonMedicalHistory by ID. Returns error if
// ID doesn't exist
func GetPersonMedicalHistoryById(id string) (v *PersonMedicalHistory, err error) {
	o := orm.NewOrm()
	v = &PersonMedicalHistory{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllPersonMedicalHistory retrieves all PersonMedicalHistory matches certain condition. Returns empty list if
// no records exist
func GetAllPersonMedicalHistory(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonMedicalHistory))
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
	
	var l []PersonMedicalHistory
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

// UpdatePersonMedicalHistory updates PersonMedicalHistory by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonMedicalHistoryById(m *PersonMedicalHistory) (err error) {
	o := orm.NewOrm()
	v := PersonMedicalHistory{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonMedicalHistory deletes PersonMedicalHistory by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonMedicalHistory(id string) (err error) {
	o := orm.NewOrm()
	v := PersonMedicalHistory{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonMedicalHistory{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
