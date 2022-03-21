package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/mergestat/timediff"
	"github.com/mergestat/timediff/locale"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) NewPatient(ctx context.Context) (*models.Person, error) {
	person := &models.Person{
		ID:          ksuid.New().String(),
		DateOfBirth: time.Time{},
		FirstName:   "testing" + randString(5),
		LastName:    "testing" + randString(5),
		Gender:      "NA",
		// PersonType:    models.PatientTypeRecipient,
		MaritalStatus: "NA",
		RecordStatus:  models.RecordStatusPublished,
		Phn:           time.Now().Format("20060102030405") + randString(2),
	}
	return person, nil
}

func (r *mutationResolver) UpdatePatient(ctx context.Context, input *models.PersonInput) (*models.Person, error) {
	return models.UpdatePatient(input)
}

func (r *mutationResolver) AddPatient(ctx context.Context, input *models.PersonInput) (*models.Person, error) {
	return models.AddPatient(input)
}

func (r *personResolver) DateOfBirth(ctx context.Context, obj *models.Person) (*string, error) {
	if obj.DateOfBirth.IsZero() {
		return nil, nil
	}
	dob := obj.DateOfBirth.Format("2006-01-02")
	return &dob, nil
}

func (r *personResolver) Age(ctx context.Context, obj *models.Person) (*string, error) {
	if obj.DateOfBirth.IsZero() {
		return nil, nil
	}
	locale.Register("en-US", englishUnitedStates)
	diff := timediff.TimeDiff(obj.DateOfBirth)
	return &diff, nil
}

func (r *personResolver) CreatedAt(ctx context.Context, obj *models.Person) (*string, error) {
	if obj.CreatedAt.IsZero() {
		return nil, nil
	}
	dob := obj.CreatedAt.Format("2006-01-02")
	return &dob, nil
}

func (r *personResolver) UpdatedAt(ctx context.Context, obj *models.Person) (*string, error) {
	if obj.UpdatedAt.IsZero() {
		return nil, nil
	}
	dob := obj.UpdatedAt.Format("2006-01-02")
	return &dob, nil
}

func (r *personResolver) Examinations(ctx context.Context, obj *models.Person, filter *models.PersonExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonExaminationList, error) {
	if filter == nil {
		filter = &models.PersonExaminationFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonExamination{}, filter, &models.PersonExaminationList{}, page, limit, sortBy, orderBy)
}

func (r *personResolver) Investigations(ctx context.Context, obj *models.Person, filter *models.PersonInvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonInvestigationList, error) {
	if filter == nil {
		filter = &models.PersonInvestigationFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonInvestigation{}, filter, &models.PersonInvestigationList{}, page, limit, sortBy, orderBy)
}

func (r *personResolver) FollowUps(ctx context.Context, obj *models.Person, filter *models.PersonFollowUpFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonFollowUpList, error) {
	if filter == nil {
		filter = &models.PersonFollowUpFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonFollowUp{}, filter, &models.PersonFollowUpList{}, page, limit, sortBy, orderBy)
}

func (r *personResolver) MedicalHistory(ctx context.Context, obj *models.Person, filter *models.PersonMedicalHistoryFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonMedicalHistoryList, error) {
	if filter == nil {
		filter = &models.PersonMedicalHistoryFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonMedicalHistory{}, filter, &models.PersonMedicalHistoryList{}, page, limit, sortBy, orderBy)
}

func (r *personResolver) OrganDonations(ctx context.Context, obj *models.Person, filter *models.PersonOrganDonationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonOrganDonationList, error) {
	if filter == nil {
		filter = &models.PersonOrganDonationFilter{}
	}
	filter.Recipient = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonOrganDonation{}, filter, &models.PersonOrganDonationList{}, page, limit, sortBy, orderBy)
}

func (r *personResolver) Workup(ctx context.Context, obj *models.Person, filter *models.PersonWorkupFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonWorkupList, error) {
	if filter == nil {
		filter = &models.PersonWorkupFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonWorkup{}, filter, &models.PersonWorkupList{}, page, limit, sortBy, orderBy)
}

func (r *queryResolver) ListPatients(ctx context.Context, filter *models.PersonFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonList, error) {
	if len(sortBy) == 0 || len(orderBy) == 0 {
		sortBy = append(sortBy, StringPointer("CreatedAt"))
		orderByAc := models.OrderByAsc
		orderBy = append(orderBy, &orderByAc)
	}
	return models.ListAnyGenerics(ctx, models.Person{}, filter, &models.PersonList{}, page, limit, sortBy, orderBy)
}

func (r *queryResolver) GetPatient(ctx context.Context, id string) (*models.Person, error) {
	return models.GetAnyById(models.Person{ID: id})
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *personResolver) BloodGroup(ctx context.Context, obj *models.Person) (*models.BloodGroup, error) {
	panic(fmt.Errorf("not implemented"))
}
