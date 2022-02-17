package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) UserLogin(ctx context.Context, userLogin *models.UserLogin) (*models.UserToken, error) {
	return &models.UserToken{
		Token: ksuid.New().String(),
		Error: nil,
		User: &models.User{
			ID:   ksuid.New().String(),
			Name: userLogin.Email,
			// Name: userLogin.Email,
		},
	}, nil
}
