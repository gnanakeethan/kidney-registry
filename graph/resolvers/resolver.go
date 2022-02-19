package resolvers

//go:generate go run github.com/99designs/gqlgen generate
import (
	"math/rand"
	"reflect"
	"sync"
	
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
	
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

func extractFilter(filterInterface interface{}) *orm.Condition {
	filter := &filterInterface
	condition := orm.NewCondition()
	if filter != nil {
		fields := reflect.VisibleFields(reflect.TypeOf(*filter))
		v := reflect.ValueOf(*filter)
		for _, j := range fields {
			fieldValInterface := v.FieldByName(j.Name).Interface()
			if fieldValInterface != nil {
				fieldVal := reflect.ValueOf(fieldValInterface).Elem()
				if fieldVal.IsValid() {
					comparision := fieldVal.FieldByName("Comparison").String()
					pretty.Println(j.Name)
					if StringInSlice(j.Name, []string{"And", "Or"}) {
						pretty.Println(fieldVal.Interface())
						switch j.Name {
						case "Or":
							condition = condition.OrCond(extractFilter(fieldVal.Interface()))
						case "OrNot":
							condition = condition.OrNotCond(extractFilter(fieldVal.Interface()))
						case "And":
							condition = condition.AndCond(extractFilter(fieldVal.Interface()))
						case "AndNot":
							condition = condition.AndNotCond(extractFilter(fieldVal.Interface()))
						}
					} else {
						switch comparision {
						case "EQUAL":
							condition = condition.And(j.Name, fieldVal.FieldByName("Value").Elem().String())
							break
						case "NOT_EQUAL":
							condition = condition.AndNot(j.Name, fieldVal.FieldByName("Value").Elem().String())
							break
						case "GREATER_THAN":
							condition = condition.And(j.Name+"__gt", fieldVal.FieldByName("Value").Elem().String())
							break
						case "GREATER_THAN_OR_EQUAL":
							condition = condition.And(j.Name+"__gte", fieldVal.FieldByName("Value").Elem().String())
							break
						case "LESS_THAN":
							condition = condition.And(j.Name+"__lt", fieldVal.FieldByName("Value").Elem().String())
							break
						case "LESS_THAN_OR_EQUAL":
							condition = condition.And(j.Name+"__lte", fieldVal.FieldByName("Value").Elem().String())
							break
						case "BETWEEN":
							// condition.And(j.Name+"__gt", fieldVal.FieldByName("Value").Elem().String())
							// condition.And(j.Name+"__lt", fieldVal.FieldByName("Value").Elem().String())
							// condition[j.Name+"__between"] = fieldVal.FieldByName("Value").Elem().String()
							break
						case "CONTAINS":
							condition = condition.And(j.Name+"__contains", fieldVal.FieldByName("Value").Elem().String())
							break
						case "ICONTAINS":
							condition = condition.And(j.Name+"__icontains", fieldVal.FieldByName("Value").Elem().String())
							break
						case "STARTS_WITH":
							condition = condition.And(j.Name+"__startswith", fieldVal.FieldByName("Value").Elem().String())
							break
						case "ENDS_WITH":
							condition = condition.And(j.Name+"__endswith", fieldVal.FieldByName("Value").Elem().String())
							break
						}
					}
				}
				
			}
		}
	}
	pretty.Println(condition)
	return condition
}

func StringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}
