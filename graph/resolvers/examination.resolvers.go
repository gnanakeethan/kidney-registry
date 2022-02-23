package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *examinationResolver) Details(ctx context.Context, obj *models.Examination) (*models.ExaminationDetails, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *examinationResolver) Procedure(ctx context.Context, obj *models.Examination) (*models.ExaminationProcedure, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *examinationResolver) Order(ctx context.Context, obj *models.Examination) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *examinationResolver) CreatedAt(ctx context.Context, obj *models.Examination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *examinationResolver) UpdatedAt(ctx context.Context, obj *models.Examination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *examinationResolver) DeletedAt(ctx context.Context, obj *models.Examination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ListExaminations(ctx context.Context, filter *models.ExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.ExaminationList, error) {
	panic(fmt.Errorf("not implemented"))
}

// Examination returns generated.ExaminationResolver implementation.
func (r *Resolver) Examination() generated.ExaminationResolver { return &examinationResolver{r} }

type examinationResolver struct{ *Resolver }
