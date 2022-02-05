package main

import (
	"github.com/beego/beego/v2/client/orm"
	beego "github.com/beego/beego/v2/server/web"
	_ "github.com/lib/pq"

	_ "github.com/gnanakeethan/kidney-registry/routers"

	"os"
)

func main() {
	orm.RegisterDataBase("default", "postgres", envConfig("sqlconn", ""))
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}
	beego.BConfig.WebConfig.StaticDir["/"] = "frontend/build"
	beego.Run()
}

func envConfig(configField, defaultValue string) string {
	if os.Getenv(configField) != "" {
		return os.Getenv(configField)
	}
	return beego.AppConfig.DefaultString("sqlconn", defaultValue)
}
