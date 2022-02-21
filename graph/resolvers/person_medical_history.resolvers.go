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
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonMedicalHistory(ctx context.Context, id string) (*models.PersonMedicalHistory, error) {
	panic(fmt.Errorf("not implemented"))
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

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *queryResolver) PersonMedicalHistorys(ctx context.Context, personID string, filter *models.PersonFilter, page *int, limit *int) (*models.PersonMedicalHistoryList, error) {
	panic(fmt.Errorf("not implemented"))
}
