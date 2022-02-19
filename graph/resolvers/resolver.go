package resolvers

//go:generate go run github.com/99designs/gqlgen generate
import (
	"math/rand"
	"reflect"
	"sync"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	UsersF    []*models.User
	Observers map[string]chan *models.User
	mu        sync.Mutex
}

var letterRunes = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

func randString(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}

func extractFilter(filter *models.PatientFilter) map[string]string {
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
	return query
}
