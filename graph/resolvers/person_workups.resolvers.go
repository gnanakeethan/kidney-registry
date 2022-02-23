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

func (r *mutationResolver) CreatePersonWorkup(ctx context.Context, input models.PersonWorkupInput) (*models.PersonWorkup, error) {
	workup, _ := models.GetWorkupsById(input.Workup.ID)
	personWorkup := &models.PersonWorkup{
		Person:    &models.Person{ID: input.Person.ID},
		Procedure: workup.Procedure,
		Details:   workup.Details,
		Workup:    &models.Workup{ID: input.Workup.ID},
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personWorkup.Results.Set(string(results))
	}
	if _, err := models.AddPersonWorkups(personWorkup); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personWorkup, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePersonWorkup(ctx context.Context, input models.PersonWorkupInput) (*models.PersonWorkup, error) {
	personWorkup := &models.PersonWorkup{
		ID:        input.ID,
		Person:    &models.Person{ID: input.Person.ID},
		Workup:    &models.Workup{ID: input.Workup.ID},
		UpdatedAt: time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personWorkup.Results.Set(string(results))
	}
	if err := models.UpdatePersonWorkupById(personWorkup); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return personWorkup, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) DeletePersonWorkup(ctx context.Context, id string) (*string, error) {
	if err := models.DeletePersonWorkups(id); err == nil {
		return &id, nil
	} else {
		return nil, err
	}
}

func (r *personWorkupResolver) Description(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personWorkupResolver) Details(ctx context.Context, obj *models.PersonWorkup) (*models.FormDetails, error) {
	detailString := obj.Details.String()
	detail := models.FormDetails{}
	json.Unmarshal([]byte(detailString), &detail)
	return &detail, nil
}

func (r *personWorkupResolver) Results(ctx context.Context, obj *models.PersonWorkup) (models.ResultsModel, error) {
	resultsString := obj.Results.String()
	results := models.ResultsModel{}
	json.Unmarshal([]byte(resultsString), &results)
	return results, nil
}

func (r *personWorkupResolver) Procedure(ctx context.Context, obj *models.PersonWorkup) (*models.Procedure, error) {
	procedureString := obj.Procedure.String()
	procedure := models.Procedure{}
	json.Unmarshal([]byte(procedureString), &procedure)
	return &procedure, nil
}

func (r *personWorkupResolver) CreatedAt(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	return StringPointer(obj.CreatedAt.Format(time.RFC3339)), nil
}

func (r *personWorkupResolver) UpdatedAt(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *personWorkupResolver) DeletedAt(ctx context.Context, obj *models.PersonWorkup) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

func (r *queryResolver) GetPersonWorkup(ctx context.Context, id string) (*models.PersonWorkup, error) {
	return models.GetPersonWorkupsById(id)
}

func (r *queryResolver) ListPersonWorkups(ctx context.Context, personID string, filter *models.PersonWorkupFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonWorkupList, error) {
	return models.ListPersonWorkups(ctx, filter, page, limit, sortBy, orderBy)
}

// PersonWorkup returns generated.PersonWorkupResolver implementation.
func (r *Resolver) PersonWorkup() generated.PersonWorkupResolver { return &personWorkupResolver{r} }

type personWorkupResolver struct{ *Resolver }
