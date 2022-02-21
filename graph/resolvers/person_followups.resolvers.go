package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUp, error) {
	models.AddPersonFollowUps(input)
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personResolver) FollowUps(ctx context.Context, obj *models.Person, filter *models.PatientFilter, page *int, limit *int) (*models.PersonFollowUpList, error) {
	return nil, nil
}

func (r *personFollowUpResolver) Person(ctx context.Context, obj *models.PersonFollowUp) (*models.Person, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PersonFollowUps(ctx context.Context, personID string, filter *models.PatientFilter, page *int, limit *int) (*models.PersonFollowUpList, error) {
	return models.GetListFollowups(ctx, filter, page, limit)
}

// PersonFollowUp returns generated.PersonFollowUpResolver implementation.
func (r *Resolver) PersonFollowUp() generated.PersonFollowUpResolver {
	return &personFollowUpResolver{r}
}

type personFollowUpResolver struct{ *Resolver }
