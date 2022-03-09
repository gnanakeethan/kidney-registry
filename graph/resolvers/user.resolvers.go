package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"time"

	"github.com/beego/beego/v2/client/orm"
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/google/uuid"
)

func (r *queryResolver) Users(ctx context.Context, filter *models.UserFilter, perPage *int, currentPage *int) (*models.UserList, error) {
	userList := &models.UserList{}
	for i := 0; i < 5; i++ {
		user := &models.User{
			ID:    uuid.Must(uuid.NewUUID()).String(),
			Email: uuid.Must(uuid.NewUUID()).String(),
		}
		time.Sleep(500 * time.Millisecond)
		userList.Items = append(userList.Items, user)
	}
	return userList, nil
}

func (r *userResolver) Roles(ctx context.Context, obj *models.User) ([]*models.Role, error) {
	o := orm.NewOrm()
	o.LoadRelatedWithCtx(ctx, obj, "RolesLoaded")
	return obj.RolesLoaded, nil
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
