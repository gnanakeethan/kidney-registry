// @APIVersion 1.0.0
// @Title beego Test API
// @Description beego has a very cool tools to autogenerate documents for your API
// @Contact astaxie@gmail.com
// @TermsOfServiceUrl http://beego.me/
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"context"
	"fmt"
	"net/http"
	"reflect"
	"strings"
	"time"
	
	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/extension"
	"github.com/99designs/gqlgen/graphql/handler/lru"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/websocket"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/graph/middleware"
	"github.com/gnanakeethan/kidney-registry/graph/resolvers"
	"github.com/gnanakeethan/kidney-registry/models"
	
	beego "github.com/beego/beego/v2/server/web"
)

func init() {
	c := generated.Config{Resolvers: &resolvers.Resolver{
		UsersF:    []*models.User{},
		Observers: map[string]chan *models.User{},
	}}
	c.Directives.HasPermission = func(ctx context.Context, obj interface{}, next graphql.Resolver, method, route string) (interface{}, error) {
		user := middleware.ForContext(ctx)
		if user == nil {
			return nil, fmt.Errorf("not authenticated")
		}
		for _, role := range user.RolesLoaded {
			if role.Name == "consultant" {
				return next(ctx)
			}
		}
		for _, perm := range user.Permissions {
			if strings.ToUpper(perm.Route) == strings.ToUpper(route) && strings.ToUpper(perm.Method) == strings.ToUpper(method) {
				return next(ctx)
			}
		}
		value := reflect.ValueOf(obj)
		pretty.Println("FIELD DEF ", obj, value)
		if obj != nil && !value.IsZero() && !value.IsNil() && value.IsValid() {
			if value.Kind() == reflect.Ptr {
				value = value.Elem()
			}
			if value.Kind() == reflect.Struct {
				if value.FieldByName("Id").IsValid() {
					if value.FieldByName("Id").String() == user.Id {
						return next(ctx)
					}
				}
			}
			
		}
		return nil, fmt.Errorf("Access denied against %s %s", method, route)
	}
	c.Directives.HasPermissionArgument = func(ctx context.Context, obj interface{}, next graphql.Resolver, method, route string) (interface{}, error) {
		user := middleware.ForContext(ctx)
		if user == nil {
			return nil, fmt.Errorf("not authenticated")
		}
		for _, role := range user.Roles {
			if role.Name == "superadmin" {
				return next(ctx)
			}
		}
		for _, perm := range user.Permissions {
			if strings.ToUpper(perm.Route) == strings.ToUpper(route) && strings.ToUpper(perm.Method) == strings.ToUpper(method) {
				return next(ctx)
			}
		}
		value := reflect.ValueOf(obj)
		pretty.Println("ARGS", obj, value)
		if obj != nil && !value.IsZero() && !value.IsNil() && value.IsValid() {
			if value.Kind() == reflect.Ptr {
				value = value.Elem()
			}
			if value.Kind() == reflect.Struct {
				if value.FieldByName("Id").IsValid() {
					if value.FieldByName("Id").String() == user.Id {
						return next(ctx)
					}
				}
			}
			if value.Kind() == reflect.Map {
				
				pretty.Println(value.MapIndex(reflect.ValueOf("id")).Interface().(string))
				if value.MapIndex(reflect.ValueOf("id")).Interface().(string) == user.Id {
					return next(ctx)
				}
			}
		}
		return nil, fmt.Errorf("Access denied against %s %s", method, route)
	}
	
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{}))
	srv.AddTransport(transport.POST{})
	srv.AddTransport(transport.Websocket{
		KeepAlivePingInterval: 10 * time.Second,
		Upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true
			},
		},
	})
	srv.Use(extension.Introspection{})
	srv.Use(extension.AutomaticPersistedQuery{Cache: lru.New(100)})
	ns := beego.NewNamespace("/v1",
		beego.NSHandler("/graphql", srv),
		beego.NSHandler("/graphql/playground", playground.Handler("GraphQL playground", "/v1/graphql/")),
	)
	beego.AddNamespace(ns)
}
