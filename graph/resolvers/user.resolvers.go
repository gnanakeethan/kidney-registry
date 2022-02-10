package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"time"

	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/google/uuid"
)

func (r *queryResolver) Users(ctx context.Context, filter *models.UserListFilter, perPage *int, currentPage *int) (*models.UserList, error) {
	userList := &models.UserList{}
	for i := 0; i < 5; i++ {
		user := &models.User{
			ID:   uuid.Must(uuid.NewUUID()).String(),
			Name: uuid.Must(uuid.NewUUID()).String(),
		}
		time.Sleep(500 * time.Millisecond)
		userList.Users = append(userList.Users, user)
	}
	return userList, nil
}
