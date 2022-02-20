package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
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
		Phn:           time.Now().Format("20060102") + randString(8),
	}
	if _, err := models.AddPersons(person); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return person, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePatient(ctx context.Context, input *models.PatientInput) (*models.Person, error) {
	return models.UpdatePatient(input)
}

func (r *personResolver) DateOfBirth(ctx context.Context, obj *models.Person) (*string, error) {
	if obj.DateOfBirth.IsZero() {
		return nil, nil
	}
	dob := obj.DateOfBirth.Format("2006-01-01")
	return &dob, nil
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

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *mutationResolver) CreatePatient(ctx context.Context, input *models.PatientInput) (*models.Person, error) {
	return models.UpdatePatient(input)
}
