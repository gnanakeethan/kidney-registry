package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	
	"github.com/beego/beego/v2/client/orm"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *queryResolver) Users(ctx context.Context, filter *models.UserFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.UserList, error) {
	return models.ListAnyGenerics(ctx, models.User{}, filter, models.UserEdge{}, &models.UserList{}, page, limit, sortBy, orderBy)
}

func (r *userResolver) Roles(ctx context.Context, obj *models.User) ([]*models.Role, error) {
	o := orm.NewOrm()
	o.LoadRelatedWithCtx(ctx, obj, "RolesLoaded")
	return obj.RolesLoaded, nil
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
