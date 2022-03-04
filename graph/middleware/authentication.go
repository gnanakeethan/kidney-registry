package middleware

import (
	"strings"
	
	"github.com/beego/beego/v2/server/web/context"
)

// A private key for context that only this package can access. This is important
// to prevent collisions between different context uses
var userCtxKey = &contextKey{"user_token"}

type contextKey struct {
	name string
}

// Middleware decodes the share session cookie and packs the session into context
func Middleware(ctx *context.Context) {
	authorization := ctx.Input.Header("Authorization")
	if len(authorization) == 0 {
		return
	}
	token := strings.Split(authorization, " ")
	if len(token) != 2 {
		return
	}
	ctx.Input.SetData(userCtxKey.name, token[1])
	return
}

// ForContext finds the user from the context. REQUIRES Middleware to have run.
func ForContext(ctx context.Context) string {
	if raw := ctx.Input.GetData(userCtxKey.name); raw != nil {
		return raw.(string)
	}
	return ""
}
