package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonExamination(ctx context.Context, input models.PersonExaminationInput) (*models.PersonExamination, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdatePersonExamination(ctx context.Context, input models.PersonExaminationInput) (*models.PersonExamination, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonExamination(ctx context.Context, id string) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Examination(ctx context.Context, obj *models.PersonExamination) (*models.Examination, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Person(ctx context.Context, obj *models.PersonExamination) (*models.Person, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Details(ctx context.Context, obj *models.PersonExamination) (*models.FormDetails, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Results(ctx context.Context, obj *models.PersonExamination) (models.ResultsModel, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personExaminationResolver) Procedure(ctx context.Context, obj *models.PersonExamination) (*models.Procedure, error) {
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

func (r *queryResolver) ListPersonExaminations(ctx context.Context, personID string, filter *models.PersonExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonExaminationList, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonExamination returns generated.PersonExaminationResolver implementation.
func (r *Resolver) PersonExamination() generated.PersonExaminationResolver {
	return &personExaminationResolver{r}
}

type personExaminationResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *personExaminationResolver) ExaminationID(ctx context.Context, obj *models.PersonExamination) (string, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *personExaminationResolver) FollowUpID(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}
