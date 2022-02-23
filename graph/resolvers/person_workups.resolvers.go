package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonWorkup(ctx context.Context, input models.PersonWorkupInput) (*models.PersonWorkup, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdatePersonWorkup(ctx context.Context, input models.PersonWorkupInput) (*models.PersonWorkup, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonWorkup(ctx context.Context, id string) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) Description(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) Details(ctx context.Context, obj *models.PersonWorkup) (*models.FormDetails, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) Results(ctx context.Context, obj *models.PersonWorkup) (models.ResultsModel, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) Procedure(ctx context.Context, obj *models.PersonWorkup) (*models.Procedure, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) CreatedAt(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) UpdatedAt(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) DeletedAt(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) GetPersonWorkup(ctx context.Context, id string) (*models.PersonWorkup, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ListPersonWorkups(ctx context.Context, personID string, filter *models.PersonWorkupFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonWorkupList, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonWorkup returns generated.PersonWorkupResolver implementation.
func (r *Resolver) PersonWorkup() generated.PersonWorkupResolver { return &personWorkupResolver{r} }

type personWorkupResolver struct{ *Resolver }
