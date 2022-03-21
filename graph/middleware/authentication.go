package middleware

import (
	rootCtx "context"
	"io/ioutil"
	"net/http"
	"os"
	"time"
	
	"github.com/SermoDigital/jose/crypto"
	"github.com/SermoDigital/jose/jws"
	"github.com/beego/beego/v2/client/orm"
	"github.com/beego/beego/v2/core/logs"
	"github.com/kr/pretty"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

// A private key for context that only this package can access. This is important
// to prevent collisions between different context uses
var userCtxKey = &contextKey{"user_token"}

type contextKey struct {
	name string
}

func Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authorization := r.Header.Get("Authorization")
		if len(authorization) == 0 {
			next.ServeHTTP(w, r)
			return
		}
		authorization = authorization[7:]
		user := ValidateToken(authorization)
		pretty.Println(user)
		ctx := rootCtx.WithValue(r.Context(), userCtxKey.name, user)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// ForContext finds the user from the context. REQUIRES Middleware to have run.
func ForContext(ctx rootCtx.Context) *models.User {
	if raw := ctx.Value(userCtxKey.name); raw != nil {
		return raw.(*models.User)
	}
	return nil
}

func GenerateToken(user *models.User, validTime int64) (string, error) {
	expires := time.Now().Add(time.Duration(validTime) * time.Second)
	claims := jws.Claims{
		"exp": expires,
		"iat": time.Now(),
		"sub": user.ID,
		"nbf": time.Now(),
		"iss": "kidney-registry",
	}
	bytes, _ := ioutil.ReadFile("conf/jose.priv")
	
	rsaPrivate, _ := crypto.ParseRSAPrivateKeyFromPEM(bytes)
	jwt := jws.NewJWT(claims, crypto.SigningMethodRS256)
	if rawToken, err := jwt.Serialize(rsaPrivate); err == nil {
		return string(rawToken), nil
	} else {
		return "", err
	}
}

func ValidateToken(token string) *models.User {
	user := &models.User{}
	o := orm.NewOrm()
	currentDir, err := os.Getwd()
	currentDir += "/"
	bytes, _ := ioutil.ReadFile(currentDir + "conf/jose.pub")
	rsaPublic, _ := crypto.ParseRSAPublicKeyFromPEM(bytes)
	jwtF, err := jws.ParseJWT([]byte(token))
	if err != nil {
		return nil
	}
	if err = jwtF.Verify(rsaPublic, crypto.SigningMethodRS256); err == nil {
		user.ID, _ = jwtF.Claims().Get("sub").(string)
		if userf, err := models.GetAnyById(*user); err == nil {
			user = userf
			o.LoadRelated(user, "RolesLoaded")
			for _, role := range user.RolesLoaded {
				o.LoadRelated(role, "Permissions")
				user.Permissions = append(user.Permissions, role.Permissions...)
			}
		}
		if err != nil {
			return nil
		}
		return user
	} else {
		logs.Debug(err.Error())
		return nil
	}
}
