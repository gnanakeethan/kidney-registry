// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

import (
	"fmt"
	"io"
	"strconv"
)

type DashboardMenus struct {
	SidebarTop    *Menu `json:"sidebarTop"`
	SidebarBottom *Menu `json:"sidebarBottom"`
}

type Error struct {
	String string `json:"string"`
	Status int    `json:"status"`
}

type FloatFilter struct {
	Comparison ComparisonType `json:"comparison"`
	And        *FloatFilter   `json:"and"`
	Or         *FloatFilter   `json:"or"`
	Value      *float64       `json:"value"`
}

type FollowUp struct {
	ID            *string `json:"ID"`
	ClinicNo      *string `json:"ClinicNo"`
	Description   *string `json:"Description"`
	Person        *Person `json:"Person"`
	Complaints    *string `json:"Complaints"`
	RenalBiopsies *string `json:"RenalBiopsies"`
	CaseStatus    *string `json:"CaseStatus"`
}

type FollowUpList struct {
	FollowUps  []*FollowUp `json:"followUps"`
	Pagination *Pagination `json:"pagination"`
}

type IntFilter struct {
	Comparison ComparisonType `json:"comparison"`
	And        *IntFilter     `json:"and"`
	Or         *IntFilter     `json:"or"`
	Value      *int           `json:"value"`
}

type Menu struct {
	Items []*MenuItem `json:"items"`
}

type MenuItem struct {
	Name  *string `json:"name"`
	Icon  *string `json:"icon"`
	Route *string `json:"route"`
}

type Pagination struct {
	CurrentPage  int `json:"currentPage"`
	PrevPage     int `json:"prevPage"`
	NextPage     int `json:"nextPage"`
	TotalItems   int `json:"totalItems"`
	ItemsPerPage int `json:"itemsPerPage"`
}

type PatientFilter struct {
	ID                  *string        `json:"ID"`
	FirstName           *StringFilter  `json:"FirstName"`
	LastName            *StringFilter  `json:"LastName"`
	Address             *StringFilter  `json:"Address"`
	DateOfBirth         *StringFilter  `json:"DateOfBirth"`
	Ethnicity           *StringFilter  `json:"Ethnicity"`
	Phn                 *StringFilter  `json:"Phn"`
	PrimaryRenalDisease *StringFilter  `json:"PrimaryRenalDisease"`
	Weight              *FloatFilter   `json:"Weight"`
	Height              *FloatFilter   `json:"Height"`
	Sex                 *StringFilter  `json:"Sex"`
	MaritalStatus       *StringFilter  `json:"MaritalStatus"`
	ContactNo           *StringFilter  `json:"ContactNo"`
	PersonType          *StringFilter  `json:"PersonType"`
	And                 *PatientFilter `json:"and"`
	AndNot              *PatientFilter `json:"andNot"`
	Or                  *PatientFilter `json:"or"`
	OrNot               *PatientFilter `json:"orNot"`
}

type PatientInput struct {
	ID                  *string        `json:"ID"`
	FirstName           *string        `json:"FirstName"`
	LastName            *string        `json:"LastName"`
	Address             *string        `json:"Address"`
	DateOfBirth         *string        `json:"DateOfBirth"`
	Ethnicity           *string        `json:"Ethnicity"`
	Phn                 *string        `json:"Phn"`
	PrimaryRenalDisease *string        `json:"PrimaryRenalDisease"`
	Weight              *float64       `json:"Weight"`
	Height              *float64       `json:"Height"`
	Sex                 *Sex           `json:"Sex"`
	MaritalStatus       *MaritalStatus `json:"MaritalStatus"`
	ContactNo           *string        `json:"ContactNo"`
	PersonType          *PatientType   `json:"PersonType"`
	Status              *PatientStatus `json:"Status"`
	RecordStatus        *RecordStatus  `json:"RecordStatus"`
}

type PersonList struct {
	Persons    []*Person   `json:"persons"`
	Pagination *Pagination `json:"pagination"`
}

type StringFilter struct {
	Comparison ComparisonType `json:"comparison"`
	And        *StringFilter  `json:"and"`
	Or         *StringFilter  `json:"or"`
	Value      *string        `json:"value"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type UserList struct {
	Users      []*User     `json:"users"`
	Pagination *Pagination `json:"pagination"`
}

type UserListFilter struct {
	ID   *StringFilter   `json:"id"`
	Name *StringFilter   `json:"name"`
	And  *UserListFilter `json:"and"`
	Or   *UserListFilter `json:"or"`
}

type UserLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UserToken struct {
	Token string `json:"token"`
	Error *Error `json:"error"`
	User  *User  `json:"user"`
}

type ComparisonType string

const (
	ComparisonTypeEqual              ComparisonType = "EQUAL"
	ComparisonTypeGreaterThan        ComparisonType = "GREATER_THAN"
	ComparisonTypeGreaterThanOrEqual ComparisonType = "GREATER_THAN_OR_EQUAL"
	ComparisonTypeLessThan           ComparisonType = "LESS_THAN"
	ComparisonTypeLessThanOrEqual    ComparisonType = "LESS_THAN_OR_EQUAL"
	ComparisonTypeBetween            ComparisonType = "BETWEEN"
	ComparisonTypeContains           ComparisonType = "CONTAINS"
	ComparisonTypeIcontains          ComparisonType = "ICONTAINS"
	ComparisonTypeNotContains        ComparisonType = "NOT_CONTAINS"
	ComparisonTypeStartsWith         ComparisonType = "STARTS_WITH"
	ComparisonTypeEndsWith           ComparisonType = "ENDS_WITH"
)

var AllComparisonType = []ComparisonType{
	ComparisonTypeEqual,
	ComparisonTypeGreaterThan,
	ComparisonTypeGreaterThanOrEqual,
	ComparisonTypeLessThan,
	ComparisonTypeLessThanOrEqual,
	ComparisonTypeBetween,
	ComparisonTypeContains,
	ComparisonTypeIcontains,
	ComparisonTypeNotContains,
	ComparisonTypeStartsWith,
	ComparisonTypeEndsWith,
}

func (e ComparisonType) IsValid() bool {
	switch e {
	case ComparisonTypeEqual, ComparisonTypeGreaterThan, ComparisonTypeGreaterThanOrEqual, ComparisonTypeLessThan, ComparisonTypeLessThanOrEqual, ComparisonTypeBetween, ComparisonTypeContains, ComparisonTypeIcontains, ComparisonTypeNotContains, ComparisonTypeStartsWith, ComparisonTypeEndsWith:
		return true
	}
	return false
}

func (e ComparisonType) String() string {
	return string(e)
}

func (e *ComparisonType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ComparisonType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ComparisonType", str)
	}
	return nil
}

func (e ComparisonType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MaritalStatus string

const (
	MaritalStatusSingle   MaritalStatus = "SINGLE"
	MaritalStatusMarried  MaritalStatus = "MARRIED"
	MaritalStatusDivorced MaritalStatus = "DIVORCED"
)

var AllMaritalStatus = []MaritalStatus{
	MaritalStatusSingle,
	MaritalStatusMarried,
	MaritalStatusDivorced,
}

func (e MaritalStatus) IsValid() bool {
	switch e {
	case MaritalStatusSingle, MaritalStatusMarried, MaritalStatusDivorced:
		return true
	}
	return false
}

func (e MaritalStatus) String() string {
	return string(e)
}

func (e *MaritalStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MaritalStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MaritalStatus", str)
	}
	return nil
}

func (e MaritalStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type PatientStatus string

const (
	PatientStatusActive   PatientStatus = "ACTIVE"
	PatientStatusInactive PatientStatus = "INACTIVE"
)

var AllPatientStatus = []PatientStatus{
	PatientStatusActive,
	PatientStatusInactive,
}

func (e PatientStatus) IsValid() bool {
	switch e {
	case PatientStatusActive, PatientStatusInactive:
		return true
	}
	return false
}

func (e PatientStatus) String() string {
	return string(e)
}

func (e *PatientStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = PatientStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid PatientStatus", str)
	}
	return nil
}

func (e PatientStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type PatientType string

const (
	PatientTypeDonor     PatientType = "DONOR"
	PatientTypeRecipient PatientType = "RECIPIENT"
)

var AllPatientType = []PatientType{
	PatientTypeDonor,
	PatientTypeRecipient,
}

func (e PatientType) IsValid() bool {
	switch e {
	case PatientTypeDonor, PatientTypeRecipient:
		return true
	}
	return false
}

func (e PatientType) String() string {
	return string(e)
}

func (e *PatientType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = PatientType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid PatientType", str)
	}
	return nil
}

func (e PatientType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type RecordStatus string

const (
	RecordStatusDraft     RecordStatus = "DRAFT"
	RecordStatusPublished RecordStatus = "PUBLISHED"
	RecordStatusRemoved   RecordStatus = "REMOVED"
)

var AllRecordStatus = []RecordStatus{
	RecordStatusDraft,
	RecordStatusPublished,
	RecordStatusRemoved,
}

func (e RecordStatus) IsValid() bool {
	switch e {
	case RecordStatusDraft, RecordStatusPublished, RecordStatusRemoved:
		return true
	}
	return false
}

func (e RecordStatus) String() string {
	return string(e)
}

func (e *RecordStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = RecordStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid RecordStatus", str)
	}
	return nil
}

func (e RecordStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type Sex string

const (
	SexMale   Sex = "MALE"
	SexFemale Sex = "FEMALE"
	SexOther  Sex = "OTHER"
)

var AllSex = []Sex{
	SexMale,
	SexFemale,
	SexOther,
}

func (e Sex) IsValid() bool {
	switch e {
	case SexMale, SexFemale, SexOther:
		return true
	}
	return false
}

func (e Sex) String() string {
	return string(e)
}

func (e *Sex) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Sex(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Sex", str)
	}
	return nil
}

func (e Sex) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
