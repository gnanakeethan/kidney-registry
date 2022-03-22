package models

import (
	"fmt"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
)

type PersonFollowUp struct {
	ID                string               `orm:"column(id);pk"`
	Description       string               `orm:"column(description);null"`
	Complaints        string               `orm:"column(complaints);null"`
	CaseStatus        string               `orm:"column(case_status);null"`
	DialysisPlan      orm.JsonbField       `orm:"column(dialysis_plan);"`
	OtherFindings     string               `orm:"column(other_findings);null"`
	Referrals         string               `orm:"column(referrals);null"`
	ConsultantOpinion string               `orm:"column(consultant_opinion);null"`
	CreatedAt         time.Time            `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt         time.Time            `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt         time.Time            `orm:"column(deleted_at);null"`
	Person            *Person              `orm:"column(person_id);rel(fk)"`
	Donation          *PersonOrganDonation `orm:"column(donation_id);rel(fk);null"`
}

func (t PersonFollowUp) IsNode() {
	fmt.Println("This is an item")
}
func (t *PersonFollowUp) TableName() string {
	return "person_follow_ups"
}

func init() {
	orm.RegisterModel(new(PersonFollowUp))
}

// AddPersonFollowUps insert a new PersonFollowUp into database and returns
// last inserted ID on success.
func AddPersonFollowUps(m *PersonFollowUp) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonFollowUpsById retrieves PersonFollowUp by ID. Returns error if
// ID doesn't exist
func GetPersonFollowUpsById(id string) (v *PersonFollowUp, err error) {
	o := orm.NewOrm()
	v = &PersonFollowUp{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// UpdatePersonFollowUps updates PersonFollowUp by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonFollowUpsById(m *PersonFollowUp) (err error) {
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

// DeletePersonFollowUps deletes PersonFollowUp by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersonFollowUps(id string) (err error) {
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
