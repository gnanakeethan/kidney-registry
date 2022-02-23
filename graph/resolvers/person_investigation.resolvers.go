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

func (r *mutationResolver) CreatePersonInvestigation(ctx context.Context, input models.PersonInvestigationInput) (*models.PersonInvestigation, error) {
	investigation, _ := models.GetInvestigationsById(input.Investigation.ID)
	personInvestigation := &models.PersonInvestigation{
		Person:        &models.Person{ID: input.Person.ID},
		Procedure:     investigation.Procedure,
		Details:       investigation.Details,
		Investigation: &models.Investigation{ID: input.Investigation.ID},
		CreatedAt:     time.Now(),
		UpdatedAt:     time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personInvestigation.Results.Set(string(results))
	}
	if _, err := models.AddPersonInvestigations(personInvestigation); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personInvestigation, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePersonInvestigation(ctx context.Context, input models.PersonInvestigationInput) (*models.PersonInvestigation, error) {
	personInvestigation := &models.PersonInvestigation{
		ID:            input.ID,
		Person:        &models.Person{ID: input.Person.ID},
		Investigation: &models.Investigation{ID: input.Investigation.ID},
		UpdatedAt:     time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personInvestigation.Results.Set(string(results))
	}
	if err := models.UpdatePersonInvestigationById(personInvestigation); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personInvestigation, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) DeletePersonInvestigation(ctx context.Context, id string) (*string, error) {
	if err := models.DeletePersonInvestigations(id); err == nil {
		return &id, nil
	} else {
		return nil, err
	}
}

func (r *personInvestigationResolver) Details(ctx context.Context, obj *models.PersonInvestigation) (*models.FormDetails, error) {
	detailString := obj.Details.String()
	detail := models.FormDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *personInvestigationResolver) Results(ctx context.Context, obj *models.PersonInvestigation) (models.ResultsModel, error) {
	resultsString := obj.Results.String()
	results := models.ResultsModel{}
	json.Unmarshal([]byte(resultsString), &results)
	return results, nil
}

func (r *personInvestigationResolver) Procedure(ctx context.Context, obj *models.PersonInvestigation) (*models.Procedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.Procedure{}
	json.Unmarshal([]byte(procedureString), &procedure)
	return &procedure, nil
}

func (r *personInvestigationResolver) CreatedAt(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(obj.CreatedAt.Format(time.RFC3339)), nil
}

func (r *personInvestigationResolver) UpdatedAt(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *personInvestigationResolver) DeletedAt(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

func (r *queryResolver) GetPersonInvestigation(ctx context.Context, id string) (*models.PersonInvestigation, error) {
	return models.GetPersonInvestigationsById(id)
}

func (r *queryResolver) ListPersonInvestigations(ctx context.Context, personID string, filter *models.PersonInvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonInvestigationList, error) {
	return models.ListPersonInvestigations(ctx, filter, page, limit, sortBy, orderBy)
}

// PersonInvestigation returns generated.PersonInvestigationResolver implementation.
func (r *Resolver) PersonInvestigation() generated.PersonInvestigationResolver {
	return &personInvestigationResolver{r}
}

type personInvestigationResolver struct{ *Resolver }
