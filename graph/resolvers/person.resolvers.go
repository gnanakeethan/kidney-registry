package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"time"
	
	"github.com/mergestat/timediff"
	"github.com/mergestat/timediff/locale"
	"github.com/segmentio/ksuid"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
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

func (r *queryResolver) ListPatients(ctx context.Context, filter *models.PersonFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonList, error) {
	if len(sortBy) == 0 || len(orderBy) == 0 {
		sortBy = append(sortBy, StringPointer("Order"))
		orderByAc := models.OrderByAsc
		orderBy = append(orderBy, &orderByAc)
	}
	return models.ListAnyGenerics(ctx, models.Person{}, filter, &models.PersonList{}, page, limit, sortBy, orderBy)
}

func (r *queryResolver) GetPatient(ctx context.Context, id string) (*models.Person, error) {
	return models.GetAnyById(&models.Person{ID: id})
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }
