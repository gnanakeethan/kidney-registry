package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/golang-jwt/jwt"
	"github.com/kr/pretty"
	passlib "gopkg.in/hlandau/passlib.v1"
)

func (r *mutationResolver) UserLogin(ctx context.Context, userLogin models.UserLogin) (*models.UserToken, error) {
	pretty.Println(userLogin)
	filter := models.UserFilter{
		Email: &models.StringFilter{
			Comparison: models.ComparisonTypeEqual,
			And:        nil,
			Or:         nil,
			Value:      StringPointer(userLogin.Email),
		},
	}
	users, _ := models.ListAnyGenerics(ctx, models.User{}, &filter, &models.UserList{}, IntToPointer(0), IntToPointer(1), nil, nil)
	mySigningKey := []byte("9t78ifugkyjhbrto98y2rgi4eu")

	type MyCustomClaims struct {
		Foo string `json:"foo"`
		jwt.StandardClaims
	}

	for _, user := range users.Items {
		pretty.Println("password checking", userLogin.Password, user.Password)
		if _, err := passlib.Verify(userLogin.Password, user.Password); err == nil {
			pretty.Println("password matched", userLogin.Password, user.Password)
			// Create the Claims
			claims := MyCustomClaims{
				"bar",
				jwt.StandardClaims{
					ExpiresAt: 15000,
					Issuer:    "kidney-registry",
					Subject:   user.ID,
				},
			}

			token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
			ss, err := token.SignedString(mySigningKey)
			pretty.Println(err)
			if err == nil {
				return &models.UserToken{
					Token: ss,
					Error: nil,
					User:  user,
				}, nil
			} else {
				return nil, err
			}
		} else {
			pretty.Println(err)
		}
	}
	return nil, nil
}
