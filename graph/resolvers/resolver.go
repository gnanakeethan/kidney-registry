package resolvers

//go:generate go run github.com/99designs/gqlgen generate
import (
	"math/rand"
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

var letterRunes = []rune("1234567890")

func randString(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}
