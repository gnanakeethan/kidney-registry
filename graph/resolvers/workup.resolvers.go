package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *queryResolver) GetWorkup(ctx context.Context, id string) (*models.Workup, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ListWorkups(ctx context.Context, filter *models.WorkupFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.WorkupList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *workupResolver) Details(ctx context.Context, obj *models.Workup) (*models.FormDetails, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *workupResolver) Procedure(ctx context.Context, obj *models.Workup) (*models.Procedure, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *workupResolver) Order(ctx context.Context, obj *models.Workup) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *workupResolver) CreatedAt(ctx context.Context, obj *models.Workup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *workupResolver) UpdatedAt(ctx context.Context, obj *models.Workup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *workupResolver) DeletedAt(ctx context.Context, obj *models.Workup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

// Workup returns generated.WorkupResolver implementation.
func (r *Resolver) Workup() generated.WorkupResolver { return &workupResolver{r} }

type workupResolver struct{ *Resolver }
