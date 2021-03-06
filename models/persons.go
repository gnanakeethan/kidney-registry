package models

import (
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
	NIC                 string        `orm:"column(nic);unique"`
	Address             string        `orm:"column(address);null"`
	DateOfBirth         time.Time     `orm:"column(date_of_birth);type(timestamp);null"`
	Ethnicity           string        `orm:"column(ethnicity);null"`
	Phn                 string        `orm:"column(phn)"`
	PrimaryRenalDisease string        `orm:"column(primary_renal_disease);null"`
	Weight              float64       `orm:"column(weight);null"`
	Height              float64       `orm:"column(height);null"`
	Gender              Gender        `orm:"column(gender);null"`
	MaritalStatus       MaritalStatus `orm:"column(marital_status)"`
	ContactNo           string        `orm:"column(contact_no);null"`
	PersonType          PatientType   `orm:"column(person_type);null"`
	BloodGroup          BloodGroup    `orm:"column(blood_group);null"`
	Status              PatientStatus `orm:"column(status);null"`
	RecordStatus        RecordStatus  `orm:"column(record_status);null"`
	CreatedAt           time.Time     `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt           time.Time     `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt           time.Time     `orm:"column(deleted_at);null"`
}

func (t *Person) TableName() string {
	return "persons"
}
func (t Person) IsNode() {
	fmt.Println("This is an item")
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
	v := &Person{ID: m.ID}
	if err = o.Read(v); err == nil {
		updatedFields := getUpdatedFields(*m, *v)
		pretty.Println(updatedFields)
		if len(updatedFields) > 0 {
			if num, err2 := o.Update(m, updatedFields...); err2 == nil {
				fmt.Println("Number of records updated in database:", num)
				return err2
			}
		}
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

func UpdatePatient(input *PersonInput) (*Person, error) {
	location, _ := time.LoadLocation("Asia/Colombo")
	dateOfBirth := time.Time{}
	if input.DateOfBirth != nil {
		dateOfBirth, _ = time.ParseInLocation("2006-01-02", *input.DateOfBirth, location)
	}
	pretty.Println(input)
	person := &Person{
		ID:                  input.ID,
		DateOfBirth:         dateOfBirth,
		Gender:              *input.Gender,
		MaritalStatus:       *input.MaritalStatus,
		PersonType:          *input.PersonType,
		Status:              *input.Status,
		RecordStatus:        *input.RecordStatus,
		FirstName:           *input.FirstName,
		LastName:            *input.LastName,
		Address:             *input.Address,
		Ethnicity:           *input.Ethnicity,
		PrimaryRenalDisease: *input.PrimaryRenalDisease,
		Weight:              *input.Weight,
		Height:              *input.Height,
		ContactNo:           *input.ContactNo,
		BloodGroup:          *input.BloodGroup,
	}
	pretty.Println(person)
	if err := UpdatePersonsById(person); err == nil {
		return person, nil
	} else {
		return nil, err
	}
}
func AddPatient(input *PersonInput) (*Person, error) {
	location, _ := time.LoadLocation("Asia/Colombo")
	dateOfBirth, _ := time.ParseInLocation("2006-01-02", *input.DateOfBirth, location)
	person := &Person{
		ID:                  input.ID,
		DateOfBirth:         dateOfBirth,
		Gender:              *input.Gender,
		MaritalStatus:       *input.MaritalStatus,
		Phn:                 time.Now().Format("20060102") + randString(3),
		NIC:                 input.Nic,
		PersonType:          *input.PersonType,
		Status:              *input.Status,
		RecordStatus:        *input.RecordStatus,
		FirstName:           *input.FirstName,
		LastName:            *input.LastName,
		Address:             *input.Address,
		Ethnicity:           *input.Ethnicity,
		PrimaryRenalDisease: *input.PrimaryRenalDisease,
		Weight:              *input.Weight,
		Height:              *input.Height,
		ContactNo:           *input.ContactNo,
		BloodGroup:          *input.BloodGroup,
	}
	pretty.Println(person)
	if _, err := AddPersons(person); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
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
