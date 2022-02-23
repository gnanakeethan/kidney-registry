package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *personExaminationResolver) Details(ctx context.Context, obj *models.PersonExamination) (*models.ExaminationDetails, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Results(ctx context.Context, obj *models.PersonExamination) (models.ExaminationResults, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) ExaminationID(ctx context.Context, obj *models.PersonExamination) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Procedure(ctx context.Context, obj *models.PersonExamination) (*models.ExaminationProcedure, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) FollowUpID(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) CreatedAt(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) UpdatedAt(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) DeletedAt(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonExamination returns generated.PersonExaminationResolver implementation.
func (r *Resolver) PersonExamination() generated.PersonExaminationResolver {
	return &personExaminationResolver{r}
}

type personExaminationResolver struct{ *Resolver }
