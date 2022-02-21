package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonMedicalHistory(ctx context.Context, input models.PersonMedicalHistoryInput) (*models.PersonMedicalHistory, error) {
	return models.AddPersonMedicalHistory(input)
}

func (r *mutationResolver) UpdatePersonMedicalHistory(ctx context.Context, input models.PersonMedicalHistoryInput) (*models.PersonMedicalHistory, error) {
	return models.AddPersonMedicalHistory(input)
}

func (r *mutationResolver) DeletePersonMedicalHistory(ctx context.Context, id string) (*string, error) {
	if err := models.DeletePersonMedicalHistory(id); err == nil {
		return &id, nil
	} else {
		return nil, err
	}
}

func (r *personResolver) Histories(ctx context.Context, obj *models.Person, filter *models.PersonMedicalHistoryFilter, page *int, limit *int) (*models.PersonMedicalHistoryList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) StartDate(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	date := obj.StartDate.Format("2006-01-01")
	return &date, nil
}

func (r *personMedicalHistoryResolver) EndDate(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	date := obj.EndDate.Format("2006-01-01")
	return &date, nil
}

func (r *queryResolver) PersonMedicalHistory(ctx context.Context, id string) (*models.PersonMedicalHistory, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ListPersonMedicalHistories(ctx context.Context, personID string, filter *models.PersonMedicalHistoryFilter, page *int, limit *int) (*models.PersonMedicalHistoryList, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonMedicalHistory returns generated.PersonMedicalHistoryResolver implementation.
func (r *Resolver) PersonMedicalHistory() generated.PersonMedicalHistoryResolver {
	return &personMedicalHistoryResolver{r}
}

type personMedicalHistoryResolver struct{ *Resolver }
