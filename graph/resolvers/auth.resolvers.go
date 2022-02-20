package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	
	"github.com/kr/pretty"
	"github.com/segmentio/ksuid"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) UserLogin(ctx context.Context, userLogin models.UserLogin) (*models.UserToken, error) {
	pretty.Println(userLogin)
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
