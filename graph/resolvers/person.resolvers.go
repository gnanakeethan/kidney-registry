package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"reflect"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/kr/pretty"
)

func (r *personResolver) DateOfBirth(ctx context.Context, obj *models.Person) (*string, error) {
	return nil, nil
}

func (r *queryResolver) ListPatients(ctx context.Context, filter *models.PatientFilter, limit *int) (*models.PersonList, error) {
	// GetAllPersons(query map[string]string, fields []string, sortby []string, order []string,
	//	offset int64, limit int64) (ml []interface{}, err error)
	// for i := 0; i < v.NumField(); i++ {
	// 	fmt.Println(v.Field(i))
	// }
	query := map[string]string{}
	if filter != nil {
		fields := reflect.VisibleFields(reflect.TypeOf(*filter))
		v := reflect.ValueOf(*filter)
		for _, j := range fields {
			fieldValInterface := v.FieldByName(j.Name).Interface()
			if fieldValInterface != nil {
				fieldVal := reflect.ValueOf(fieldValInterface).Elem()
				if fieldVal.IsValid() {
					comparision := fieldVal.FieldByName("Comparison").String()
					switch comparision {
					case "EQUAL":
						query[j.Name] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "NOT_EQUAL":
						// query[j.Name] = fieldVal.FieldByName("Value").Interface().(string)
						break
					case "GREATER_THAN":
						query[j.Name+"__gt"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "GREATER_THAN_OR_EQUAL":
						query[j.Name+"__gte"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "LESS_THAN":
						query[j.Name+"__te"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "LESS_THAN_OR_EQUAL":
						query[j.Name+"__lte"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "BETWEEN":
						// query[j.Name+"__between"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "CONTAINS":
						query[j.Name+"__contains"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "ICONTAINS":
						query[j.Name+"__icontains"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "STARTS_WITH":
						query[j.Name+"__startswith"] = fieldVal.FieldByName("Value").Elem().String()
						break
					case "ENDS_WITH":
						query[j.Name+"__endswith"] = fieldVal.FieldByName("Value").Elem().String()
						break
					}
					// pretty.Println(j.Name)
					// pretty.Println(fieldVal.Interface())
				}
			}
		}
	}
	persons, err := models.GetAllPersons(query, nil, nil, nil, 0, 10)
	pretty.Println(persons, err)
	return &models.PersonList{
		Persons: []*models.Person{
			{
				Id:                  "",
				FirstName:           "",
				LastName:            "",
				Address:             "",
				DateOfBirth:         time.Time{},
				Ethnicity:           "",
				Phn:                 "",
				PrimaryRenalDisease: "",
				Weight:              0,
				Height:              0,
				Sex:                 "",
				MaritalStatus:       "",
				ContactNo:           "",
				PersonType:          "",
			},
		},
		Pagination: nil,
	}, nil
}

// Person returns generated.PersonResolver implementation.
func (r *Resolver) Person() generated.PersonResolver { return &personResolver{r} }

type personResolver struct{ *Resolver }
