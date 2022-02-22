package models

import (
	"context"
	"fmt"
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
	CreatedAt   time.Time   `orm:"column(created_at);type(timestamp without time zone);auto_now_add;null"`
	UpdatedAt   time.Time   `orm:"column(updated_at);type(timestamp without time zone);auto_now;null"`
	DeletedAt   time.Time   `orm:"column(deleted_at);null"`
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
func AddPersonMedicalHistory(m PersonMedicalHistoryInput) (personMedicalHistory *PersonMedicalHistory, err error) {
	o := orm.NewOrm()
	startDate, _ := time.Parse("2006-01-02", PointerToString(m.StartDate))
	endDate, _ := time.Parse("2006-01-02", PointerToString(m.EndDate))
	idString := ksuid.New().String()
	if m.ID != nil {
		idString = *m.ID
	}
	personMedicalHistory = &PersonMedicalHistory{
		ID:          idString,
		Person:      &Person{ID: m.Person.ID},
		Description: PointerToString(m.Description),
		Reason:      PointerToString(m.Reason),
		StartDate:   startDate,
		EndDate:     endDate,
		Medications: PointerToString(m.Medications),
		Type:        m.Type,
	}
	if _, err = o.InsertOrUpdate(personMedicalHistory, "ID"); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personMedicalHistory, nil
	} else {
		return personMedicalHistory, err
	}
	
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

func GetListMedicalHistory(ctx context.Context, filter *PersonMedicalHistoryFilter, page *int, limit *int, sortBy []*string, orderBy []*OrderBy) (*PersonMedicalHistoryList, error) {
	var PersonMedicalHistories []*PersonMedicalHistory
	PersonMedicalHistory := PersonMedicalHistory{}
	filterPtr := PersonMedicalHistoryFilter{}
	if filter != nil {
		filterPtr = *filter
	}
	query, currentPage, perPage, preloads := extractQuery(ctx, PersonMedicalHistory, filterPtr, page, limit)
	qs, totalItems, err := GetAnyAll(PersonMedicalHistory, query, sortBy, orderBy, (currentPage-1)*perPage, perPage)
	if err != nil {
		return nil, err
	}
	if _, err := qs.All(&PersonMedicalHistories, preloads...); err != nil {
		return nil, err
	}
	pagination := getPagination(currentPage, totalItems, perPage)
	return &PersonMedicalHistoryList{
		Histories:  PersonMedicalHistories,
		Pagination: pagination,
	}, nil
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
