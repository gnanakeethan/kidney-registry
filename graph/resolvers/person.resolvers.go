package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	
	"github.com/kr/pretty"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *personResolver) DateOfBirth(ctx context.Context, obj *models.Person) (*string, error) {
	return nil, nil
}

func (r *queryResolver) ListPatients(ctx context.Context, filter *models.PatientFilter, page *int, limit *int) (*models.PersonList, error) {
	query := extractFilter(*filter)
	currentPage := int64(1)
	perPage := int64(15)
	if page != nil {
		currentPage = int64(*page)
	}
	if limit != nil {
		perPage = int64(*limit)
	}
	persons, totalItems, err := models.GetAllPersons(query, nil, nil, nil, (currentPage-1)*perPage, perPage)
	prevPage := 0
	if int(totalItems/perPage) > int(currentPage) {
		prevPage = int(currentPage - 1)
	}
	nextPage := 0
	if int(currentPage+1) <= int(totalItems/perPage) {
		nextPage = int(currentPage + 1)
	}
	pretty.Println(persons, totalItems, err)
	return &models.PersonList{
		Persons: persons,
		Pagination: &models.Pagination{
			CurrentPage:  int(currentPage),
			PrevPage:     prevPage,
			NextPage:     nextPage,
			TotalItems:   int(totalItems),
			ItemsPerPage: int(perPage),
		},
	}, nil
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }
