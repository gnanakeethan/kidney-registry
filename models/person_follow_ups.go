package models

import (
	"context"
	"fmt"
	
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
)

type PersonFollowUp struct {
	ID             string               `orm:"column(id);pk"`
	ClinicNo       string               `orm:"column(clinic_no)"`
	Description    string               `orm:"column(description);null"`
	PersonFollowUp *PersonFollowUp      `orm:"column(PersonFollowUp_id);rel(fk)"`
	Complaints     string               `orm:"column(complaints);null"`
	RenalBiopsies  string               `orm:"column(renal_biopsies);null"`
	CaseStatus     string               `orm:"column(case_status);null"`
	DonationId     *PersonOrganDonation `orm:"column(donation_id);rel(fk)"`
}

func (t *PersonFollowUp) TableName() string {
	return "PersonFollowUp_follow_ups"
}

func init() {
	orm.RegisterModel(new(PersonFollowUp))
}

// AddPersonFollowUpFollowUps insert a new PersonFollowUp into database and returns
// last inserted ID on success.
func AddPersonFollowUpFollowUps(m *PersonFollowUp) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonFollowUpFollowUpsById retrieves PersonFollowUp by ID. Returns error if
// ID doesn't exist
func GetPersonFollowUpFollowUpsById(id string) (v *PersonFollowUp, err error) {
	o := orm.NewOrm()
	v = &PersonFollowUp{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

func GetListFollowups(ctx context.Context, filter *PatientFilter, page *int, limit *int) (*PersonFollowUpList, error) {
	PersonFollowUp, PersonFollowUps := PersonFollowUp{}, []*PersonFollowUp{}
	filterPtr := PatientFilter{}
	if filter != nil {
		filterPtr = *filter
	}
	query, currentPage, perPage, preloads := extractQuery(ctx, PersonFollowUp, filterPtr, page, limit)
	pretty.Println(preloads)
	qs, totalItems, err := GetAnyAll(PersonFollowUp, query, nil, nil, (currentPage-1)*perPage, perPage)
	if err != nil {
		return nil, err
	}
	if _, err := qs.All(&PersonFollowUps, preloads...); err != nil {
		return nil, err
	}
	pagination := getPagination(currentPage, totalItems, perPage)
	return &PersonFollowUpList{
		FollowUps:  PersonFollowUps,
		Pagination: pagination,
	}, nil
}

// UpdatePersonFollowUpFollowUps updates PersonFollowUp by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonFollowUpFollowUpsById(m *PersonFollowUp) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUp{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeletePersonFollowUpFollowUps deletes PersonFollowUp by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonFollowUpFollowUps(id string) (err error) {
	o := orm.NewOrm()
	v := PersonFollowUp{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&PersonFollowUp{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
