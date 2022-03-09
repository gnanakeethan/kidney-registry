package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/google/uuid"
)

func (r *queryResolver) Users(ctx context.Context, filter *models.UserFilter, perPage *int, currentPage *int) (*models.UserList, error) {
	userList := &models.UserList{}
	for i := 0; i < 5; i++ {
		user := &models.User{
			ID:       uuid.Must(uuid.NewUUID()).String(),
			Username: uuid.Must(uuid.NewUUID()).String(),
		}
		time.Sleep(500 * time.Millisecond)
		userList.Users = append(userList.Users, user)
	}
	return userList, nil
}

func (r *userResolver) Name(ctx context.Context, obj *models.User) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *userResolver) ID(ctx context.Context, obj *models.User) (string, error) {
	panic(fmt.Errorf("not implemented"))
}
