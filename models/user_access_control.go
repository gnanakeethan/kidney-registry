package models

import "github.com/beego/beego/v2/client/orm"

type ReadOnlyUsers struct {
	ID       string `orm:"column(id);pk"`
	User     *User  `orm:"column(user_id);rel(fk)"`
	RecordID string `orm:"column(record_id);rel(fk)"`
}

func (t *ReadOnlyUsers) TableName() string {
	return "read_only_users"
}

func init() {
	orm.RegisterModel(new(ReadOnlyUsers))
}

type JsonFields struct {
	orm.JsonbField
	Fields []string
}

type ReadWriteUsers struct {
	ID       string     `orm:"column(id);pk"`
	User     *User      `orm:"column(user_id);rel(fk)"`
	RecordID string     `orm:"column(record_id);rel(fk)"`
	Fields   JsonFields `orm:"column(fields);type(json)"`
}

func (t *ReadWriteUsers) TableName() string {
	return "read_only_users"
}

func init() {
	orm.RegisterModel(new(ReadWriteUsers))
}
