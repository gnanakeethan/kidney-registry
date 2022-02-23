package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonInvestigation(ctx context.Context, input models.PersonInvestigationInput) (*models.PersonInvestigation, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdatePersonInvestigation(ctx context.Context, input models.PersonInvestigationInput) (*models.PersonInvestigation, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonInvestigation(ctx context.Context, id string) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ListPersonInvestigations(ctx context.Context, personID string, filter *models.PersonInvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonInvestigationList, error) {
	panic(fmt.Errorf("not implemented"))
}
