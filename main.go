package main

import (
	"github.com/beego/beego/v2/client/orm"
	beego "github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/filter/cors"
	_ "github.com/lib/pq"
	
	"github.com/gnanakeethan/kidney-registry/graph/middleware"
	_ "github.com/gnanakeethan/kidney-registry/routers"
	
	"os"
)

func main() {
	orm.RegisterDataBase("default", "postgres", envConfig("sqlconn", ""))
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
		orm.Debug = true
	}
	beego.BConfig.WebConfig.StaticDir["/"] = "frontend/build"
	beego.InsertFilter("*", beego.BeforeRouter, cors.Allow(&cors.Options{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Content-Type"},
		AllowCredentials: true,
	}))
	beego.BConfig.Listen.HTTPAddr = "0.0.0.0"
	beego.RunWithMiddleWares("", middleware.Middleware)
}

func envConfig(configField, defaultValue string) string {
	if os.Getenv(configField) != "" {
		return os.Getenv(configField)
	}
	return beego.AppConfig.DefaultString("sqlconn", defaultValue)
}
