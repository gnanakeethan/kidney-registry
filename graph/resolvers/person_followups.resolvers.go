package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personResolver) FollowUps(ctx context.Context, obj *models.Person, filter *models.PersonFilter, page *int, limit *int) (*models.PersonFollowUpList, error) {
	return nil, nil
}

func (r *queryResolver) PersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PersonFollowUps(ctx context.Context, personID string, filter *models.PersonFilter, page *int, limit *int) (*models.PersonFollowUpList, error) {
	panic(fmt.Errorf("not implemented"))
}
