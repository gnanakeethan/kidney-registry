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

type PersonOrganDonation struct {
	ID             string    `orm:"column(id);pk"`
	Recipient      *Person   `orm:"column(receiver_id);rel(fk)"`
	Donor          *Person   `orm:"column(donor_id);rel(fk)"`
	DonationType   string    `orm:"column(donation_type)"`
	PlannedDate    time.Time `orm:"column(planned_date);type(timestamp);null"`
	PerformedDate  time.Time `orm:"column(performed_date);type(timestamp);null"`
	DischargedDate time.Time `orm:"column(discharged_date);type(timestamp);null"`
	AcuteRejection bool      `orm:"column(acute_rejection);null"`
	
	CreatedAt time.Time `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt time.Time `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt time.Time `orm:"column(deleted_at);null"`
}

func (t *PersonOrganDonation) TableName() string {
	return "person_organ_donation"
}

func init() {
	orm.RegisterModel(new(PersonOrganDonation))
}

// AddPersonOrganDonation insert a new PersonOrganDonation into database and returns
// last inserted ID on success.
func AddPersonOrganDonation(m *PersonOrganDonation) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonOrganDonationById retrieves PersonOrganDonation by ID. Returns error if
// ID doesn't exist
func GetPersonOrganDonationById(id string) (v *PersonOrganDonation, err error) {
	o := orm.NewOrm()
	v = &PersonOrganDonation{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

func ListPersonOrganDonations(ctx context.Context, filter *PersonOrganDonationFilter, page *int, limit *int, sortBy []*string, orderBy []*OrderBy) (*PersonOrganDonationList, error) {
	personOrganDonation, personOrganDonations := PersonOrganDonation{}, []*PersonOrganDonation{}
	filterPtr := PersonOrganDonationFilter{}
	if filter != nil {
		filterPtr = *filter
	}
	query, currentPage, perPage, preloads := extractQuery(ctx, personOrganDonation, filterPtr, page, limit)
	pretty.Println(preloads)
	qs, totalItems, err := GetAnyAll(personOrganDonation, query, sortBy, orderBy, (currentPage-1)*perPage, perPage)
	if err != nil {
		return nil, err
	}
	if _, err := qs.RelatedSel().All(&personOrganDonations, preloads...); err != nil {
		return nil, err
	}
	pagination := getPagination(currentPage, totalItems, perPage)
	return &PersonOrganDonationList{
		Items:      personOrganDonations,
		Pagination: pagination,
	}, nil
}

// GetAllPersonOrganDonation retrieves all PersonOrganDonation matches certain condition. Returns empty list if
// no records exist
func GetAllPersonOrganDonation(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(PersonOrganDonation))
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
	
	var l []PersonOrganDonation
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

// UpdatePersonOrganDonation updates PersonOrganDonation by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonOrganDonationById(m *PersonOrganDonation) (err error) {
	o := orm.NewOrm()
	v := PersonOrganDonation{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonOrganDonation deletes PersonOrganDonation by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonOrganDonation(id string) (err error) {
	o := orm.NewOrm()
	v := PersonOrganDonation{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonOrganDonation{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
