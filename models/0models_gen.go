// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

import (
	"fmt"
	"io"
	"strconv"
)

type DynamicFormInterface interface {
	IsDynamicFormInterface()
}

type Attributes struct {
	ID           *string `json:"id"`
	Max          *int    `json:"max"`
	Min          *int    `json:"min"`
	Step         *string `json:"step"`
	Type         *string `json:"type"`
	Label        *string `json:"label"`
	Disabled     *bool   `json:"disabled"`
	Classes      *string `json:"classes"`
	LabelClasses *string `json:"labelClasses"`
	FieldName    *string `json:"fieldName"`
	Image        *string `json:"image"`
}

type AttributesInput struct {
	ID       *string `json:"id"`
	Max      *int    `json:"max"`
	Min      *int    `json:"min"`
	Step     *int    `json:"step"`
	Type     *string `json:"type"`
	Label    *string `json:"label"`
	Disabled *bool   `json:"disabled"`
	Classes  *string `json:"classes"`
}

type DashboardMenus struct {
	SidebarTop    *Menu `json:"sidebarTop"`
	SidebarBottom *Menu `json:"sidebarBottom"`
}

type DialysisPlan struct {
	Type      *string `json:"Type"`
	Plan      *string `json:"Plan"`
	Frequency *string `json:"Frequency"`
}

type DialysisPlanInput struct {
	Type      *string `json:"Type"`
	Plan      *string `json:"Plan"`
	Frequency *string `json:"Frequency"`
}

type Error struct {
	String string `json:"string"`
	Status int    `json:"status"`
}

type ExaminationFilter struct {
	Order *IntFilter `json:"Order"`
}

type ExaminationInput struct {
	ID        string            `json:"ID"`
	Details   *FormDetailsInput `json:"Details"`
	Procedure *ProcedureInput   `json:"Procedure"`
	Order     *int              `json:"Order"`
	CreatedAt *string           `json:"CreatedAt"`
	UpdatedAt *string           `json:"UpdatedAt"`
	DeletedAt *string           `json:"DeletedAt"`
}

type ExaminationList struct {
	Items      []*Examination `json:"items"`
	Pagination *Pagination    `json:"pagination"`
}

type Extra struct {
	Items   []*Items `json:"items"`
	Options []*Items `json:"options"`
}

type ExtraInput struct {
	Items []*ItemsInput `json:"items"`
}

type Fields struct {
	Name       *string     `json:"name"`
	Type       *string     `json:"type"`
	Value      *string     `json:"value"`
	Attributes *Attributes `json:"attributes"`
	Prefix     *Prefix     `json:"prefix"`
	Extra      *Extra      `json:"extra"`
}

type FieldsInput struct {
	Name       *string          `json:"name"`
	Type       *string          `json:"type"`
	Value      *string          `json:"value"`
	Attributes *AttributesInput `json:"attributes"`
	Prefix     *PrefixInput     `json:"prefix"`
	Extra      *ExtraInput      `json:"extra"`
}

type FloatFilter struct {
	Comparison ComparisonType `json:"comparison"`
	And        *FloatFilter   `json:"and"`
	Or         *FloatFilter   `json:"or"`
	Value      *float64       `json:"value"`
}

type FormDetails struct {
	Name        *string `json:"Name"`
	Description *string `json:"Description"`
	Inline      *bool   `json:"Inline"`
	ValidDays   *int    `json:"ValidDays"`
}

type FormDetailsInput struct {
	Name        *string `json:"Name"`
	Description *string `json:"Description"`
	Inline      *bool   `json:"Inline"`
	ValidDays   *int    `json:"ValidDays"`
}

type IntFilter struct {
	Comparison ComparisonType `json:"comparison"`
	And        *IntFilter     `json:"and"`
	Or         *IntFilter     `json:"or"`
	Value      *int           `json:"value"`
}

type InvestigationFilter struct {
	Order *IntFilter `json:"Order"`
}

type InvestigationInput struct {
	ID        string            `json:"ID"`
	Details   *FormDetailsInput `json:"Details"`
	Procedure *ProcedureInput   `json:"Procedure"`
	Order     *int              `json:"Order"`
	CreatedAt *string           `json:"CreatedAt"`
	UpdatedAt *string           `json:"UpdatedAt"`
	DeletedAt *string           `json:"DeletedAt"`
}

type InvestigationList struct {
	Items      []*Investigation `json:"items"`
	Pagination *Pagination      `json:"pagination"`
}

type Items struct {
	ID    *string `json:"id"`
	Name  *string `json:"name"`
	Title *string `json:"title"`
	Value *string `json:"value"`
}

type ItemsInput struct {
	ID    *string `json:"id"`
	Name  *string `json:"name"`
	Title *string `json:"title"`
	Value *string `json:"value"`
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

type PersonComparison struct {
	Comparison ComparisonType `json:"comparison"`
	Value      *string        `json:"value"`
}

type PersonExaminationFilter struct {
	Examination *ExaminationFilter `json:"Examination"`
	Person      *PersonFilter      `json:"Person"`
	FollowUpID  *StringFilter      `json:"FollowUpId"`
	CreatedAt   *StringFilter      `json:"CreatedAt"`
	UpdatedAt   *StringFilter      `json:"UpdatedAt"`
	DeletedAt   *StringFilter      `json:"DeletedAt"`
}

type PersonExaminationInput struct {
	ID          *string           `json:"ID"`
	Description *string           `json:"Description"`
	Results     ResultsModel      `json:"Results"`
	Examination *ExaminationInput `json:"Examination"`
	Person      *PersonInput      `json:"Person"`
}

type PersonExaminationList struct {
	Items      []*PersonExamination `json:"items"`
	Pagination *Pagination          `json:"pagination"`
}

type PersonFilter struct {
	ID                  *StringFilter `json:"ID"`
	FirstName           *StringFilter `json:"FirstName"`
	LastName            *StringFilter `json:"LastName"`
	Address             *StringFilter `json:"Address"`
	DateOfBirth         *StringFilter `json:"DateOfBirth"`
	Ethnicity           *StringFilter `json:"Ethnicity"`
	Phn                 *StringFilter `json:"Phn"`
	PrimaryRenalDisease *StringFilter `json:"PrimaryRenalDisease"`
	Weight              *FloatFilter  `json:"Weight"`
	Height              *FloatFilter  `json:"Height"`
	Gender              *StringFilter `json:"Gender"`
	MaritalStatus       *StringFilter `json:"MaritalStatus"`
	Status              *StringFilter `json:"Status"`
	ContactNo           *StringFilter `json:"ContactNo"`
	PersonType          *StringFilter `json:"PersonType"`
	And                 *PersonFilter `json:"and"`
	AndNot              *PersonFilter `json:"andNot"`
	Or                  *PersonFilter `json:"or"`
	OrNot               *PersonFilter `json:"orNot"`
}

type PersonFollowUpFilter struct {
	ID                *StringFilter              `json:"ID"`
	Description       *StringFilter              `json:"Description"`
	Complaints        *StringFilter              `json:"Complaints"`
	CaseStatus        *StringFilter              `json:"CaseStatus"`
	OtherFindings     *StringFilter              `json:"OtherFindings"`
	Referrals         *StringFilter              `json:"Referrals"`
	ConsultantOpinion *StringFilter              `json:"ConsultantOpinion"`
	Person            *PersonFilter              `json:"Person"`
	Donation          *PersonOrganDonationFilter `json:"Donation"`
}

type PersonFollowUpInput struct {
	ID                string                         `json:"ID"`
	Description       *string                        `json:"Description"`
	Complaints        *string                        `json:"Complaints"`
	CaseStatus        *string                        `json:"CaseStatus"`
	DialysisPlan      *DialysisPlanInput             `json:"DialysisPlan"`
	OtherFindings     *string                        `json:"OtherFindings"`
	Referrals         *string                        `json:"Referrals"`
	ConsultantOpinion *string                        `json:"ConsultantOpinion"`
	Person            *PersonInput                   `json:"Person"`
	Donation          *PersonOrganDonationInput      `json:"Donation"`
	Medicines         []*PersonFollowUpMedicineInput `json:"Medicines"`
}

type PersonFollowUpList struct {
	Items      []*PersonFollowUp `json:"items"`
	Pagination *Pagination       `json:"pagination"`
}

type PersonFollowUpMedicine struct {
	ID           string  `json:"ID"`
	MedicineCode *string `json:"MedicineCode"`
	Name         *string `json:"Name"`
	Dosage       *string `json:"Dosage"`
	Frequency    *string `json:"Frequency"`
	Duration     *string `json:"Duration"`
	StartDate    *string `json:"StartDate"`
	EndDate      *string `json:"EndDate"`
}

type PersonFollowUpMedicineInput struct {
	ID           string  `json:"ID"`
	MedicineCode *string `json:"MedicineCode"`
	Name         *string `json:"Name"`
	Dosage       *string `json:"Dosage"`
	Frequency    *string `json:"Frequency"`
	Duration     *string `json:"Duration"`
	StartDate    *string `json:"StartDate"`
	EndDate      *string `json:"EndDate"`
}

type PersonInput struct {
	ID                  string         `json:"ID"`
	Age                 *string        `json:"Age"`
	FirstName           *string        `json:"FirstName"`
	LastName            *string        `json:"LastName"`
	Address             *string        `json:"Address"`
	DateOfBirth         *string        `json:"DateOfBirth"`
	Ethnicity           *string        `json:"Ethnicity"`
	Phn                 *string        `json:"Phn"`
	PrimaryRenalDisease *string        `json:"PrimaryRenalDisease"`
	Weight              *float64       `json:"Weight"`
	Height              *float64       `json:"Height"`
	Gender              *Gender        `json:"Gender"`
	MaritalStatus       *MaritalStatus `json:"MaritalStatus"`
	ContactNo           *string        `json:"ContactNo"`
	PersonType          *PatientType   `json:"PersonType"`
	Status              *PatientStatus `json:"Status"`
	RecordStatus        *RecordStatus  `json:"RecordStatus"`
	BloodGroup          *BloodGroup    `json:"BloodGroup"`
	CreatedAt           *string        `json:"CreatedAt"`
	UpdatedAt           *string        `json:"UpdatedAt"`
}

type PersonInvestigationFilter struct {
	Person          *PersonFilter `json:"Person"`
	InvestigationID *StringFilter `json:"InvestigationId"`
	CreatedAt       *StringFilter `json:"CreatedAt"`
	UpdatedAt       *StringFilter `json:"UpdatedAt"`
	DeletedAt       *StringFilter `json:"DeletedAt"`
}

type PersonInvestigationInput struct {
	ID            *string             `json:"ID"`
	Description   *string             `json:"Description"`
	Results       ResultsModel        `json:"Results"`
	Investigation *InvestigationInput `json:"Investigation"`
	Person        *PersonInput        `json:"Person"`
	ValidDays     *int                `json:"ValidDays"`
	ObtainedDate  *string             `json:"ObtainedDate"`
	ExpectedDate  *string             `json:"ExpectedDate"`
	CreatedAt     *string             `json:"CreatedAt"`
}

type PersonInvestigationList struct {
	Items      []*PersonInvestigation `json:"items"`
	Pagination *Pagination            `json:"pagination"`
}

type PersonList struct {
	Items      []*Person   `json:"items"`
	Pagination *Pagination `json:"pagination"`
}

type PersonMedicalHistoryFilter struct {
	ID          *StringFilter               `json:"ID"`
	Person      *PersonFilter               `json:"Person"`
	Description *StringFilter               `json:"Description"`
	Reason      *StringFilter               `json:"Reason"`
	StartDate   *StringFilter               `json:"StartDate"`
	EndDate     *StringFilter               `json:"EndDate"`
	Medications *StringFilter               `json:"Medications"`
	Type        *StringFilter               `json:"Type"`
	And         *PersonMedicalHistoryFilter `json:"and"`
	AndNot      *PersonMedicalHistoryFilter `json:"andNot"`
	Or          *PersonMedicalHistoryFilter `json:"or"`
	OrNot       *PersonMedicalHistoryFilter `json:"orNot"`
}

type PersonMedicalHistoryInput struct {
	ID          *string      `json:"ID"`
	Person      *PersonInput `json:"Person"`
	Description *string      `json:"Description"`
	Reason      *string      `json:"Reason"`
	StartDate   *string      `json:"StartDate"`
	EndDate     *string      `json:"EndDate"`
	Medications *string      `json:"Medications"`
	Type        HistoryType  `json:"Type"`
}

type PersonMedicalHistoryList struct {
	Items      []*PersonMedicalHistory `json:"items"`
	Pagination *Pagination             `json:"pagination"`
}

type PersonOrganDonationFilter struct {
	ID             *string       `json:"ID"`
	Donor          *PersonFilter `json:"Donor"`
	Recipient      *PersonFilter `json:"Recipient"`
	DonationType   *string       `json:"DonationType"`
	PlannedDate    *string       `json:"PlannedDate"`
	PerformedDate  *string       `json:"PerformedDate"`
	DischargedDate *string       `json:"DischargedDate"`
	AcuteRejection *bool         `json:"AcuteRejection"`
}

type PersonOrganDonationInput struct {
	ID             *string      `json:"ID"`
	Donor          *PersonInput `json:"Donor"`
	Recipient      *PersonInput `json:"Recipient"`
	DonationType   *string      `json:"DonationType"`
	PlannedDate    *string      `json:"PlannedDate"`
	PerformedDate  *string      `json:"PerformedDate"`
	DischargedDate *string      `json:"DischargedDate"`
	AcuteRejection *bool        `json:"AcuteRejection"`
}

type PersonOrganDonationList struct {
	Items      []*PersonOrganDonation `json:"items"`
	Pagination *Pagination            `json:"pagination"`
}

type PersonWorkupFilter struct {
	Person    *PersonFilter `json:"Person"`
	WorkupID  *StringFilter `json:"WorkupId"`
	CreatedAt *StringFilter `json:"CreatedAt"`
	UpdatedAt *StringFilter `json:"UpdatedAt"`
	DeletedAt *StringFilter `json:"DeletedAt"`
}

type PersonWorkupInput struct {
	ID          *string      `json:"ID"`
	Description *string      `json:"Description"`
	Results     ResultsModel `json:"Results"`
	Workup      *WorkupInput `json:"Workup"`
	Person      *PersonInput `json:"Person"`
}

type PersonWorkupList struct {
	Items      []*PersonWorkup `json:"items"`
	Pagination *Pagination     `json:"pagination"`
}

type Prefix struct {
	Classes *string `json:"classes"`
}

type PrefixInput struct {
	Classes *string `json:"classes"`
}

type Procedure struct {
	Fields []*Fields `json:"fields"`
}

type ProcedureInput struct {
	Fields []*FieldsInput `json:"fields"`
}

type StringFilter struct {
	Comparison ComparisonType `json:"comparison"`
	And        *StringFilter  `json:"and"`
	Or         *StringFilter  `json:"or"`
	Value      *string        `json:"value"`
}

type UserFilter struct {
	ID    *StringFilter `json:"id"`
	Name  *StringFilter `json:"name"`
	Email *StringFilter `json:"email"`
	And   *UserFilter   `json:"and"`
	Or    *UserFilter   `json:"or"`
}

type UserList struct {
	Items      []*User     `json:"items"`
	Pagination *Pagination `json:"pagination"`
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

type WorkupFilter struct {
	Order *IntFilter `json:"Order"`
}

type WorkupInput struct {
	ID        string            `json:"ID"`
	Details   *FormDetailsInput `json:"Details"`
	Procedure *ProcedureInput   `json:"Procedure"`
	Order     *int              `json:"Order"`
	CreatedAt *string           `json:"CreatedAt"`
	UpdatedAt *string           `json:"UpdatedAt"`
	DeletedAt *string           `json:"DeletedAt"`
}

type WorkupList struct {
	Items      []*Workup   `json:"items"`
	Pagination *Pagination `json:"pagination"`
}

type BloodGroup string

const (
	BloodGroupAPos  BloodGroup = "A_POS"
	BloodGroupANeg  BloodGroup = "A_NEG"
	BloodGroupBPos  BloodGroup = "B_POS"
	BloodGroupBNeg  BloodGroup = "B_NEG"
	BloodGroupOPos  BloodGroup = "O_POS"
	BloodGroupONeg  BloodGroup = "O_NEG"
	BloodGroupAbPos BloodGroup = "AB_POS"
	BloodGroupAbNeg BloodGroup = "AB_NEG"
	BloodGroupNa    BloodGroup = "NA"
)

var AllBloodGroup = []BloodGroup{
	BloodGroupAPos,
	BloodGroupANeg,
	BloodGroupBPos,
	BloodGroupBNeg,
	BloodGroupOPos,
	BloodGroupONeg,
	BloodGroupAbPos,
	BloodGroupAbNeg,
	BloodGroupNa,
}

func (e BloodGroup) IsValid() bool {
	switch e {
	case BloodGroupAPos, BloodGroupANeg, BloodGroupBPos, BloodGroupBNeg, BloodGroupOPos, BloodGroupONeg, BloodGroupAbPos, BloodGroupAbNeg, BloodGroupNa:
		return true
	}
	return false
}

func (e BloodGroup) String() string {
	return string(e)
}

func (e *BloodGroup) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = BloodGroup(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid BloodGroup", str)
	}
	return nil
}

func (e BloodGroup) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
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

type Gender string

const (
	GenderMale   Gender = "MALE"
	GenderFemale Gender = "FEMALE"
	GenderOther  Gender = "OTHER"
	GenderNa     Gender = "NA"
)

var AllGender = []Gender{
	GenderMale,
	GenderFemale,
	GenderOther,
	GenderNa,
}

func (e Gender) IsValid() bool {
	switch e {
	case GenderMale, GenderFemale, GenderOther, GenderNa:
		return true
	}
	return false
}

func (e Gender) String() string {
	return string(e)
}

func (e *Gender) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Gender(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Gender", str)
	}
	return nil
}

func (e Gender) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type HistoryType string

const (
	HistoryTypeComplaint HistoryType = "COMPLAINT"
	HistoryTypeMedical   HistoryType = "MEDICAL"
	HistoryTypeSurgical  HistoryType = "SURGICAL"
	HistoryTypeSocial    HistoryType = "SOCIAL"
)

var AllHistoryType = []HistoryType{
	HistoryTypeComplaint,
	HistoryTypeMedical,
	HistoryTypeSurgical,
	HistoryTypeSocial,
}

func (e HistoryType) IsValid() bool {
	switch e {
	case HistoryTypeComplaint, HistoryTypeMedical, HistoryTypeSurgical, HistoryTypeSocial:
		return true
	}
	return false
}

func (e HistoryType) String() string {
	return string(e)
}

func (e *HistoryType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = HistoryType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid HistoryType", str)
	}
	return nil
}

func (e HistoryType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MaritalStatus string

const (
	MaritalStatusSingle   MaritalStatus = "SINGLE"
	MaritalStatusMarried  MaritalStatus = "MARRIED"
	MaritalStatusDivorced MaritalStatus = "DIVORCED"
	MaritalStatusNa       MaritalStatus = "NA"
)

var AllMaritalStatus = []MaritalStatus{
	MaritalStatusSingle,
	MaritalStatusMarried,
	MaritalStatusDivorced,
	MaritalStatusNa,
}

func (e MaritalStatus) IsValid() bool {
	switch e {
	case MaritalStatusSingle, MaritalStatusMarried, MaritalStatusDivorced, MaritalStatusNa:
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

type OrderBy string

const (
	OrderByAsc  OrderBy = "asc"
	OrderByDesc OrderBy = "desc"
)

var AllOrderBy = []OrderBy{
	OrderByAsc,
	OrderByDesc,
}

func (e OrderBy) IsValid() bool {
	switch e {
	case OrderByAsc, OrderByDesc:
		return true
	}
	return false
}

func (e OrderBy) String() string {
	return string(e)
}

func (e *OrderBy) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = OrderBy(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid OrderBy", str)
	}
	return nil
}

func (e OrderBy) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type PatientStatus string

const (
	PatientStatusActive                          PatientStatus = "ACTIVE"
	PatientStatusInactive                        PatientStatus = "INACTIVE"
	PatientStatusNa                              PatientStatus = "NA"
	PatientStatusWorkingUp                       PatientStatus = "WORKING_UP"
	PatientStatusSuspended                       PatientStatus = "SUSPENDED"
	PatientStatusPermanentlyUnfit                PatientStatus = "PERMANENTLY_UNFIT"
	PatientStatusDeceasedWillAwaitingTransplant  PatientStatus = "DECEASED_WILL_AWAITING_TRANSPLANT"
	PatientStatusDeceasedPostCadavericTransplant PatientStatus = "DECEASED_POST_CADAVERIC_TRANSPLANT"
	PatientStatusReceivedLiveTransplant          PatientStatus = "RECEIVED_LIVE_TRANSPLANT"
	PatientStatusCadavericDonor                  PatientStatus = "CADAVERIC_DONOR"
	PatientStatusLiveDonor                       PatientStatus = "LIVE_DONOR"
)

var AllPatientStatus = []PatientStatus{
	PatientStatusActive,
	PatientStatusInactive,
	PatientStatusNa,
	PatientStatusWorkingUp,
	PatientStatusSuspended,
	PatientStatusPermanentlyUnfit,
	PatientStatusDeceasedWillAwaitingTransplant,
	PatientStatusDeceasedPostCadavericTransplant,
	PatientStatusReceivedLiveTransplant,
	PatientStatusCadavericDonor,
	PatientStatusLiveDonor,
}

func (e PatientStatus) IsValid() bool {
	switch e {
	case PatientStatusActive, PatientStatusInactive, PatientStatusNa, PatientStatusWorkingUp, PatientStatusSuspended, PatientStatusPermanentlyUnfit, PatientStatusDeceasedWillAwaitingTransplant, PatientStatusDeceasedPostCadavericTransplant, PatientStatusReceivedLiveTransplant, PatientStatusCadavericDonor, PatientStatusLiveDonor:
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
	PatientTypeNa        PatientType = "NA"
)

var AllPatientType = []PatientType{
	PatientTypeDonor,
	PatientTypeRecipient,
	PatientTypeNa,
}

func (e PatientType) IsValid() bool {
	switch e {
	case PatientTypeDonor, PatientTypeRecipient, PatientTypeNa:
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
