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

func (r *queryResolver) GetWorkup(ctx context.Context, id string) (*models.Workup, error) {
	return models.GetAnyById(&models.Workup{ID: id})
}

func (r *queryResolver) ListWorkups(ctx context.Context, filter *models.WorkupFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.WorkupList, error) {
	sortBy = append(sortBy, StringPointer("Order"))
	orderByAc := models.OrderByAsc
	orderBy = append(orderBy, &orderByAc)
	return models.ListWorkups(ctx, filter, page, limit, sortBy, orderBy)
}

func (r *workupResolver) Details(ctx context.Context, obj *models.Workup) (*models.FormDetails, error) {
	detailString := obj.Details.String()
	detail := models.FormDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *workupResolver) Procedure(ctx context.Context, obj *models.Workup) (*models.Procedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.Procedure{}
	json.Unmarshal([]byte(procedureString), &procedure)
	return &procedure, nil
}

func (r *workupResolver) CreatedAt(ctx context.Context, obj *models.Workup) (*string, error) {
	return StringPointer(obj.CreatedAt.Format(time.RFC3339)), nil
}

func (r *workupResolver) UpdatedAt(ctx context.Context, obj *models.Workup) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *workupResolver) DeletedAt(ctx context.Context, obj *models.Workup) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

// Workup returns generated.WorkupResolver implementation.
func (r *Resolver) Workup() generated.WorkupResolver { return &workupResolver{r} }

type workupResolver struct{ *Resolver }
