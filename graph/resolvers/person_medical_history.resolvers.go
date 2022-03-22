package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonMedicalHistory(ctx context.Context, input models.PersonMedicalHistoryInput) (*models.PersonMedicalHistoryEdge, error) {
	model, err := models.AddPersonMedicalHistory(input)
	return &models.PersonMedicalHistoryEdge{
		Node: model,
	}, err
}

func (r *mutationResolver) UpdatePersonMedicalHistory(ctx context.Context, input models.PersonMedicalHistoryInput) (*models.PersonMedicalHistoryEdge, error) {
	model, err := models.AddPersonMedicalHistory(input)
	return &models.PersonMedicalHistoryEdge{
		Node: model,
	}, err
}

func (r *mutationResolver) DeletePersonMedicalHistory(ctx context.Context, id string) (*string, error) {
	if err := models.DeletePersonMedicalHistory(id); err == nil {
		return &id, nil
	} else {
		return nil, err
	}
}

func (r *personResolver) Histories(ctx context.Context, obj *models.Person, filter *models.PersonMedicalHistoryFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	if filter == nil {
		filter = &models.PersonMedicalHistoryFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &obj.ID}}
	return models.ListAnyGenerics(ctx, models.PersonMedicalHistory{}, filter, models.PersonMedicalHistoryEdge{}, &models.PersonMedicalHistoryList{}, page, limit, sortBy, orderBy)
}

func (r *personMedicalHistoryResolver) StartDate(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	if obj.StartDate.IsZero() {
		return StringPointer(""), nil
	}
	date := obj.StartDate.Format("2006-01-02")
	return &date, nil
}

func (r *personMedicalHistoryResolver) EndDate(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	if obj.EndDate.IsZero() {
		return StringPointer(""), nil
	}
	date := obj.EndDate.Format("2006-01-02")
	return &date, nil
}

func (r *personMedicalHistoryResolver) CreatedAt(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	if obj.CreatedAt.IsZero() {
		return StringPointer(""), nil
	}
	date := obj.CreatedAt.Format("2006-01-02")
	return &date, nil
}

func (r *personMedicalHistoryResolver) UpdatedAt(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	if obj.UpdatedAt.IsZero() {
		return StringPointer(""), nil
	}
	date := obj.UpdatedAt.Format("2006-01-02")
	return &date, nil
}

func (r *queryResolver) PersonMedicalHistory(ctx context.Context, id string) (*models.PersonMedicalHistoryEdge, error) {
	personMedicalHistory, err := models.GetAnyById(models.PersonMedicalHistory{ID: id})
	return &models.PersonMedicalHistoryEdge{Node: personMedicalHistory}, err
}

func (r *queryResolver) ListPersonMedicalHistories(ctx context.Context, personID string, filter *models.PersonMedicalHistoryFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	if filter == nil {
		filter = &models.PersonMedicalHistoryFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &personID}}
	return models.ListAnyGenerics(ctx, models.PersonMedicalHistory{}, filter, models.PersonMedicalHistoryEdge{}, &models.PersonMedicalHistoryList{}, page, limit, sortBy, orderBy)
}

// PersonMedicalHistory returns generated.PersonMedicalHistoryResolver implementation.
func (r *Resolver) PersonMedicalHistory() generated.PersonMedicalHistoryResolver {
	return &personMedicalHistoryResolver{r}
}

type personMedicalHistoryResolver struct{ *Resolver }
