package middleware

import (
	"context"
	"net/http"
	"strings"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

// A private key for context that only this package can access. This is important
// to prevent collisions between different context uses
var userCtxKey = &contextKey{"user"}

type contextKey struct {
	name string
}

// Middleware decodes the share session cookie and packs the session into context
func Middleware() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			authorization := r.Header["Authorization"]
			if len(authorization) == 0 {
				next.ServeHTTP(w, r)
				return
			}
			token := strings.Split(authorization[0], " ")
			if len(token) != 2 {
				next.ServeHTTP(w, r)
				return
			}
			
			ctx := context.WithValue(r.Context(), userCtxKey, token[0])
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
		})
	}
}

// ForContext finds the user from the context. REQUIRES Middleware to have run.
func ForContext(ctx context.Context) *models.User {
	raw, _ := ctx.Value(userCtxKey).(*models.User)
	return raw
}
