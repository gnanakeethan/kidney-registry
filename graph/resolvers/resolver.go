package resolvers

//go:generate go run github.com/99designs/gqlgen generate
import (
	"sync"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Users     []*models.User
	Observers map[string]chan []*models.User
	mu        sync.Mutex
}
