package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/mergestat/timediff"
	"github.com/mergestat/timediff/locale"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) NewPatient(ctx context.Context) (*models.Person, error) {
	person := &models.Person{
		ID:            ksuid.New().String(),
		DateOfBirth:   time.Time{},
		FirstName:     "testing",
		Gender:        "NA",
		MaritalStatus: "NA",
		PersonType:    "RECIPIENT",
		Status:        "INACTIVE",
		RecordStatus:  "DRAFT",
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
	return models.GetListPatients(ctx, filter, page, limit, sortBy, orderBy)
}

func (r *queryResolver) GetPatient(ctx context.Context, id string) (*models.Person, error) {
	time.Sleep(1 * time.Second)
	return models.GetPersonsById(id)
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }
