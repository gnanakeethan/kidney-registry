package models

import (
	"github.com/beego/beego/v2/client/orm"
)

type Workflow struct {
	ID            string         `orm:"column(id);pk"`
	Name          string         `orm:"column(name)"`
	User          *User          `orm:"column(user_id);rel(fk)"`
	Configuration orm.JsonbField `orm:"column(configuration);null"`
}

func (Workflow) IsNode()                 {}
func (Workflow) IsDynamicFormInterface() {}

func (t *Workflow) TableName() string {
	return "workflows"
}

func init() {
	orm.RegisterModel(new(Workflow))
}

// GetWorkflowById retrieves Workflow by ID. Returns error if
// ID doesn't exist
func GetWorkflowById(id string) (v *Workflow, err error) {
	o := orm.NewOrm()
	v = &Workflow{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

func AddWorkflow(m *Workflow) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}
