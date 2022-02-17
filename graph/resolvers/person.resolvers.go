package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"time"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *personResolver) DateOfBirth(ctx context.Context, obj *models.Person) (*string, error) {
	return nil, nil
}

func (r *queryResolver) ListPatients(ctx context.Context, limit *int) (*models.PersonList, error) {
	return &models.PersonList{
		Persons: []*models.Person{
			{
				Id:                  0,
				FirstName:           "",
				LastName:            "",
				Address:             "",
				DateOfBirth:         time.Time{},
				Ethnicity:           "",
				Phn:                 "",
				PrimaryRenalDisease: "",
				Weight:              0,
				Height:              0,
				Sex:                 "",
				MaritalStatus:       "",
				ContactNo:           "",
				PersonType:          "",
			},
		},
		Pagination: nil,
	}, nil
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }
