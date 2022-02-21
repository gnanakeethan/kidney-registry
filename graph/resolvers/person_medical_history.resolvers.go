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
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdatePersonMedicalHistory(ctx context.Context, input models.PersonMedicalHistoryInput) (*models.PersonMedicalHistory, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonMedicalHistory(ctx context.Context, id string) (*models.PersonMedicalHistory, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personResolver) Histories(ctx context.Context, obj *models.Person, filter *models.PatientFilter, page *int, limit *int) (*models.PersonMedicalHistoryList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) Person(ctx context.Context, obj *models.PersonMedicalHistory) (*models.Person, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) Description(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) Reason(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) StartDate(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) EndDate(ctx context.Context, obj *models.PersonMedicalHistory) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personMedicalHistoryResolver) Type(ctx context.Context, obj *models.PersonMedicalHistory) (*models.HistoryType, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PersonMedicalHistory(ctx context.Context, id string) (*models.PersonMedicalHistory, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PersonMedicalHistorys(ctx context.Context, personID string, filter *models.PatientFilter, page *int, limit *int) (*models.PersonMedicalHistoryList, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonMedicalHistory returns generated.PersonMedicalHistoryResolver implementation.
func (r *Resolver) PersonMedicalHistory() generated.PersonMedicalHistoryResolver {
	return &personMedicalHistoryResolver{r}
}

type personMedicalHistoryResolver struct{ *Resolver }
