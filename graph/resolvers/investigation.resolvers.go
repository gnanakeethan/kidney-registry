package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *investigationResolver) Details(ctx context.Context, obj *models.Investigation) (*models.FormDetails, error) {
	detailString := obj.Details.String()
	detail := models.FormDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *investigationResolver) Procedure(ctx context.Context, obj *models.Investigation) (*models.Procedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.Procedure{}
	json.Unmarshal([]byte(procedureString), &procedure)
	return &procedure, nil
}

func (r *investigationResolver) CreatedAt(ctx context.Context, obj *models.Investigation) (*string, error) {
	return StringPointer(obj.CreatedAt.Format(time.RFC3339)), nil
}

func (r *investigationResolver) UpdatedAt(ctx context.Context, obj *models.Investigation) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *investigationResolver) DeletedAt(ctx context.Context, obj *models.Investigation) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

func (r *queryResolver) GetInvestigation(ctx context.Context, id string) (*models.Investigation, error) {
	return models.GetInvestigationsById(id)
}

func (r *queryResolver) ListInvestigations(ctx context.Context, filter *models.InvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.InvestigationList, error) {
	sortBy = append(sortBy, StringPointer("Order"))
	orderByAc := models.OrderByAsc
	orderBy = append(orderBy, &orderByAc)
	return models.ListInvestigations(ctx, filter, page, limit, sortBy, orderBy)
}

// Investigation returns generated.InvestigationResolver implementation.
func (r *Resolver) Investigation() generated.InvestigationResolver { return &investigationResolver{r} }

type investigationResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *investigationResolver) Order(ctx context.Context, obj *models.Investigation) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}
