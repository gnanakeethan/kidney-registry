package models

import (
	"context"
	"fmt"
	"math/rand"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
)

type Person struct {
	ID                  string        `orm:"column(id);pk"`
	FirstName           string        `orm:"column(first_name)"`
	LastName            string        `orm:"column(last_name);null"`
	Address             string        `orm:"column(address);null"`
	DateOfBirth         time.Time     `orm:"column(date_of_birth);type(date);null"`
	Ethnicity           string        `orm:"column(ethnicity);null"`
	Phn                 string        `orm:"column(phn)"`
	PrimaryRenalDisease string        `orm:"column(primary_renal_disease);null"`
	Weight              float64       `orm:"column(weight);null"`
	Height              float64       `orm:"column(height);null"`
	Gender              Gender        `orm:"column(gender);null"`
	MaritalStatus       MaritalStatus `orm:"column(marital_status)"`
	ContactNo           string        `orm:"column(contact_no);null"`
	PersonType          PatientType   `orm:"column(person_type);null"`
	Status              PatientStatus `orm:"column(status);null"`
	RecordStatus        RecordStatus  `orm:"column(record_status);null"`
	CreatedAt           time.Time     `orm:"column(created_at);type(datetime);auto_now_add;null"`
	UpdatedAt           time.Time     `orm:"column(updated_at);type(datetime);auto_now;null"`
	DeletedAt           time.Time     `orm:"column(deleted_at);null"`
}

func (t *Person) TableName() string {
	return "persons"
}

func init() {
	orm.RegisterModel(new(Person))
}

// AddPersons insert a new Person into database and returns
// last inserted ID on success.
func AddPersons(m *Person) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetPersonsById retrieves Person by ID. Returns error if
// ID doesn't exist
func GetPersonsById(id string) (v *Person, err error) {
	o := orm.NewOrm()
	v = &Person{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// UpdatePersons updates Person by ID and returns error if
// the record to be updated doesn't exist
func UpdatePersonsById(m *Person) (err error) {
	o := orm.NewOrm()
	if num, err := o.InsertOrUpdate(m, "ID"); err == nil {
		fmt.Println("Number of records updated in database:", num)
	}
	return
}

// DeletePersons deletes Person by ID and returns error if
// the record to be deleted doesn't exist
func DeletePersons(id string) (err error) {
	o := orm.NewOrm()
	v := Person{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&Person{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}

func GetListPatients(ctx context.Context, filter *PersonFilter, page *int, limit *int, sortBy []*string, orderBy []*OrderBy) (*PersonList, error) {
	person, persons := Person{}, []*Person{}
	filterPtr := PersonFilter{}
	if filter != nil {
		filterPtr = *filter
	}
	query, currentPage, perPage, preloads := extractQuery(ctx, person, filterPtr, page, limit)
	pretty.Println(preloads)
	qs, totalItems, err := GetAnyAll(person, query, sortBy, orderBy, (currentPage-1)*perPage, perPage)
	if err != nil {
		return nil, err
	}
	if _, err := qs.All(&persons, preloads...); err != nil {
		return nil, err
	}
	pagination := getPagination(currentPage, totalItems, perPage)
	return &PersonList{
		Persons:    persons,
		Pagination: pagination,
	}, nil
}

func UpdatePatient(input *PersonInput) (*Person, error) {
	dateOfBirth, _ := time.Parse("2006-01-02", *input.DateOfBirth)
	person := &Person{
		ID:                  input.ID,
		DateOfBirth:         dateOfBirth,
		Gender:              *input.Gender,
		MaritalStatus:       *input.MaritalStatus,
		PersonType:          *input.PersonType,
		Status:              *input.Status,
		RecordStatus:        *input.RecordStatus,
		Phn:                 time.Now().Format("20060102") + randString(8),
		FirstName:           *input.FirstName,
		LastName:            *input.LastName,
		Address:             *input.Address,
		Ethnicity:           *input.Ethnicity,
		PrimaryRenalDisease: *input.PrimaryRenalDisease,
		Weight:              *input.Weight,
		Height:              *input.Height,
		ContactNo:           *input.ContactNo,
	}
	if err := UpdatePersonsById(person); err == nil {
		return person, nil
	} else {
		return nil, err
	}
}

func randString(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}

var letterRunes = []rune("1234567890")
