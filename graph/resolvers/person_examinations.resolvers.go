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

func (r *mutationResolver) CreatePersonExamination(ctx context.Context, input models.PersonExaminationInput) (*models.PersonExamination, error) {
	examination, _ := models.GetExaminationsById(input.Examination.ID)
	personExamination := &models.PersonExamination{
		Person:      &models.Person{ID: input.Person.ID},
		Procedure:   examination.Procedure,
		Details:     examination.Details,
		Examination: &models.Examination{ID: input.Examination.ID},
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personExamination.Results.Set(string(results))
	}
	if _, err := models.AddPersonExaminations(personExamination); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personExamination, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePersonExamination(ctx context.Context, input models.PersonExaminationInput) (*models.PersonExamination, error) {
	personExamination := &models.PersonExamination{
		ID:          input.ID,
		Person:      &models.Person{ID: input.Person.ID},
		Examination: &models.Examination{ID: input.Examination.ID},
		UpdatedAt:   time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personExamination.Results.Set(string(results))
	}
	if err := models.UpdatePersonExaminationById(personExamination); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personExamination, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) DeletePersonExamination(ctx context.Context, id string) (*string, error) {
	if err := models.DeletePersonExaminations(id); err == nil {
		return &id, nil
	} else {
		return nil, err
	}
}

func (r *personExaminationResolver) Details(ctx context.Context, obj *models.PersonExamination) (*models.FormDetails, error) {
	detailString := obj.Details.String()
	detail := models.FormDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *personExaminationResolver) Results(ctx context.Context, obj *models.PersonExamination) (models.ResultsModel, error) {
	resultsString := obj.Results.String()
	results := models.ResultsModel{}
	json.Unmarshal([]byte(resultsString), &results)
	return results, nil
}

func (r *personExaminationResolver) Procedure(ctx context.Context, obj *models.PersonExamination) (*models.Procedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.Procedure{}
	json.Unmarshal([]byte(procedureString), &procedure)
	return &procedure, nil
}

func (r *personExaminationResolver) CreatedAt(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	return StringPointer(obj.CreatedAt.Format(time.RFC3339)), nil
}

func (r *personExaminationResolver) UpdatedAt(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *personExaminationResolver) DeletedAt(ctx context.Context, obj *models.PersonExamination) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

func (r *queryResolver) GetPersonExamination(ctx context.Context, id string) (*models.PersonExamination, error) {
	return models.GetPersonExaminationsById(id)
}

func (r *queryResolver) ListPersonExaminations(ctx context.Context, personID string, filter *models.PersonExaminationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonExaminationList, error) {
	return models.ListPersonExaminations(ctx, filter, page, limit, sortBy, orderBy)
}

// PersonExamination returns generated.PersonExaminationResolver implementation.
func (r *Resolver) PersonExamination() generated.PersonExaminationResolver {
	return &personExaminationResolver{r}
}

type personExaminationResolver struct{ *Resolver }
