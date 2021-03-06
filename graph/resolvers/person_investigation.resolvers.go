package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) CreatePersonInvestigation(ctx context.Context, input models.PersonInvestigationInput) (*models.PersonInvestigationEdge, error) {
	investigation, _ := models.GetInvestigationsById(input.Investigation.ID)
	personInvestigation := &models.PersonInvestigation{
		ID:            ksuid.New().String(),
		Person:        &models.Person{ID: input.Person.ID},
		Procedure:     investigation.Procedure,
		Details:       investigation.Details,
		Investigation: &models.Investigation{ID: input.Investigation.ID},
		ExpectedDate:  GetDate(PointerString(input.ExpectedDate)),
		ObtainedDate:  GetDate(PointerString(input.ObtainedDate)),
		ValidDays:     PointerToInt(input.ValidDays),
		CreatedAt:     time.Now(),
		UpdatedAt:     time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personInvestigation.Results.Set(string(results))
	}
	if _, err := models.AddPersonInvestigations(personInvestigation); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return &models.PersonInvestigationEdge{
			Node: personInvestigation,
		}, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePersonInvestigation(ctx context.Context, input models.PersonInvestigationInput) (*models.PersonInvestigationEdge, error) {
	personInvestigation := &models.PersonInvestigation{
		ID:            PointerString(input.ID),
		Person:        &models.Person{ID: input.Person.ID},
		Investigation: &models.Investigation{ID: input.Investigation.ID},
		ObtainedDate:  GetDate(PointerString(input.ObtainedDate)),
		ExpectedDate:  GetDate(PointerString(input.ExpectedDate)),
		ValidDays:     PointerToInt(input.ValidDays),
		UpdatedAt:     time.Now(),
	}
	if results, err := json.Marshal(input.Results); err == nil {
		personInvestigation.Results.Set(string(results))
	}
	if err := models.UpdatePersonInvestigationById(personInvestigation); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return &models.PersonInvestigationEdge{
			Node: personInvestigation,
		}, nil
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

func (r *personInvestigationResolver) ObtainedDate(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(formatDate(obj.ObtainedDate)), nil
}

func (r *personInvestigationResolver) ExpectedDate(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(formatDate(obj.ExpectedDate)), nil
}

func (r *personInvestigationResolver) CreatedAt(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(formatDateTime(obj.CreatedAt)), nil
}

func (r *personInvestigationResolver) UpdatedAt(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(obj.UpdatedAt.Format(time.RFC3339)), nil
}

func (r *personInvestigationResolver) DeletedAt(ctx context.Context, obj *models.PersonInvestigation) (*string, error) {
	return StringPointer(obj.DeletedAt.Format(time.RFC3339)), nil
}

func (r *queryResolver) GetPersonInvestigation(ctx context.Context, id string) (*models.PersonInvestigationEdge, error) {
	personInvestigation, err := models.GetAnyById(models.PersonInvestigation{ID: id})
	return &models.PersonInvestigationEdge{Node: personInvestigation}, err
}

func (r *queryResolver) ListPersonInvestigations(ctx context.Context, personID string, filter *models.PersonInvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	if filter == nil {
		filter = &models.PersonInvestigationFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &personID}}
	return models.ListAnyGenerics(ctx, models.PersonInvestigation{}, filter, models.PersonInvestigationEdge{}, &models.PersonInvestigationList{}, page, limit, sortBy, orderBy, []string{})
}

func (r *queryResolver) ListAllPersonInvestigations(ctx context.Context, filter *models.PersonInvestigationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	return models.ListAnyGenerics(ctx, models.PersonInvestigation{}, filter, models.PersonInvestigationEdge{}, &models.PersonInvestigationList{}, page, limit, sortBy, orderBy, []string{})
}

// PersonInvestigation returns generated.PersonInvestigationResolver implementation.
func (r *Resolver) PersonInvestigation() generated.PersonInvestigationResolver {
	return &personInvestigationResolver{r}
}

type personInvestigationResolver struct{ *Resolver }
