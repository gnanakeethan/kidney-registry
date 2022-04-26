package models

import (
	"github.com/beego/beego/v2/client/orm"
)

type Workflows struct {
	ID            string         `orm:"column(id);pk"`
	User          *User          `orm:"column(user_id)"`
	Configuration orm.JsonbField `orm:"column(configuration);null"`
}

func (Workflows) IsNode()                 {}
func (Workflows) IsDynamicFormInterface() {}

func (t *Workflows) TableName() string {
	return "workflows"
}

func init() {
	orm.RegisterModel(new(Workflows))
}

// GetWorkflowsById retrieves Workflows by ID. Returns error if
// ID doesn't exist
func GetWorkflowsById(id string) (v *Workflows, err error) {
	o := orm.NewOrm()
	v = &Workflows{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}
