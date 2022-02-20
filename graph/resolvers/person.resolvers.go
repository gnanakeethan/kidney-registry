package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) NewPatient(ctx context.Context) (*models.Person, error) {
	person := &models.Person{
		ID:            ksuid.New().String(),
		DateOfBirth:   time.Time{},
		Gender:        "N/A",
		MaritalStatus: "N/A",
		PersonType:    "PATIENT",
		Status:        "INACTIVE",
		RecordStatus:  "DRAFT",
		Phn:           ksuid.New().String(),
	}
	if _, err := models.AddPersons(person); err == nil {
		return person, nil
	} else {
		return nil, err
	}

	// panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) CreatePatient(ctx context.Context, input *models.PatientInput) (*models.Person, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personResolver) DateOfBirth(ctx context.Context, obj *models.Person) (*string, error) {
	return nil, nil
}

func (r *personResolver) FollowUps(ctx context.Context, obj *models.Person) (*models.FollowUpList, error) {
	return nil, nil
}

func (r *queryResolver) ListPatients(ctx context.Context, filter *models.PatientFilter, page *int, limit *int) (*models.PersonList, error) {
	return models.GetListPatients(ctx, filter, page, limit)
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }
