package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *examinationResolver) Details(ctx context.Context, obj *models.Examination) (*models.FormDetails, error) {
	detailString := obj.Details.String()
	detail := models.FormDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *examinationResolver) Procedure(ctx context.Context, obj *models.Examination) (*models.Procedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.Procedure{}
	json.Unmarshal([]byte(procedureString), &procedure)
	return &procedure, nil
}

func (r *examinationResolver) CreatedAt(ctx context.Context, obj *models.Examination) (*string, error) {
	return StringPointer(obj.CreatedAt.Format(time.RFC3339)), nil
}

func (r *examinationResolver) UpdatedAt(ctx context.Context, obj *models.Examination) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *examinationResolver) DeletedAt(ctx context.Context, obj *models.Examination) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

func (r *queryResolver) GetExamination(ctx context.Context, id string) (*models.Examination, error) {
	return models.GetExaminationsById(id)
}

func (r *queryResolver) ListExaminations(ctx context.Context, filter *models.ExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.ExaminationList, error) {
	if len(sortBy) == 0 || len(orderBy) == 0 {
		sortBy = append(sortBy, StringPointer("Order"))
		orderByAc := models.OrderByAsc
		orderBy = append(orderBy, &orderByAc)
	}
	return models.ListAnyGenerics(ctx, models.Examination{}, filter, &models.ExaminationList{}, page, limit, sortBy, orderBy)
}

// Examination returns generated.ExaminationResolver implementation.
func (r *Resolver) Examination() generated.ExaminationResolver { return &examinationResolver{r} }

type examinationResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *queryResolver) ListExaminationsGenerics(ctx context.Context, filter *models.ExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.ExaminationList, error) {
	return nil, nil
}
