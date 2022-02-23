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

func (r *examinationResolver) Details(ctx context.Context, obj *models.Examination) (*models.ExaminationDetails, error) {
	detailString := obj.Details.String()
	detail := models.ExaminationDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *examinationResolver) Procedure(ctx context.Context, obj *models.Examination) (*models.ExaminationProcedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.ExaminationProcedure{}
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
	sortBy = append(sortBy, StringPointer("Order"))
	orderByAc := models.OrderByAsc
	orderBy = append(orderBy, &orderByAc)
	return models.ListExaminations(ctx, filter, page, limit, sortBy, orderBy)
}

// Examination returns generated.ExaminationResolver implementation.
func (r *Resolver) Examination() generated.ExaminationResolver { return &examinationResolver{r} }

type examinationResolver struct{ *Resolver }
