package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"
	
	"github.com/beego/beego/v2/client/orm"
)

type UserRole struct {
	ID   string `orm:"column(id);pk"`
	Role *Role  `orm:"column(role_id);rel(fk)"`
	User *User  `orm:"column(user_id);rel(fk)"`
}

type Role struct {
	ID          string        `orm:"column(id);pk"`
	Name        string        `orm:"column(name)"`
	Slug        string        `orm:"column(slug)"`
	Description string        `orm:"column(description)"`
	Users       []*User       `orm:"rel(m2m);rel_through(github.com/gnanakeethan/kidney-registry/models.UserRole)"`
	Permissions []*Permission `orm:"rel(m2m);rel_through(github.com/gnanakeethan/kidney-registry/models.RolePermission)"`
}

type Permission struct {
	ID          string   `orm:"column(id);pk"`
	Name        string   `orm:"column(name)"`
	Slug        string   `orm:"column(slug)"`
	Object      string   `orm:"column(object)"`
	Action      string   `orm:"column(action)"`
	Description string   `orm:"column(description)"`
	Roles       []*Role  `orm:"rel(m2m);rel_through(github.com/gnanakeethan/kidney-registry/models.RolePermission)"`
	Fields      []*Field `orm:"rel(m2m);rel_through(github.com/gnanakeethan/kidney-registry/models.PermissionField)"`
}
type RolePermission struct {
	ID         string      `orm:"column(id);pk"`
	Permission *Permission `orm:"column(permission_id);rel(fk)"`
	Role       *Role       `orm:"column(role_id);rel(fk)"`
}
type PermissionField struct {
	ID         string      `orm:"column(id);pk"`
	Permission *Permission `orm:"column(permission_id);rel(fk)"`
	Field      *Field      `orm:"column(field_id);rel(fk)"`
}
type Field struct {
	ID   string `orm:"column(id);pk"`
	Name string `orm:"column(name)"`
}

type User struct {
	ID          string        `orm:"column(id);pk"`
	Email       string        `orm:"column(email)"`
	Name        string        `orm:"column(name)"`
	Password    string        `orm:"column(password)"`
	RolesLoaded []*Role       `orm:"rel(m2m);rel_through(github.com/gnanakeethan/kidney-registry/models.UserRole)"`
	Permissions []*Permission `orm:"-"`
	CreatedAt   time.Time     `orm:"column(created_at);type(timestamp);auto_now_add;null"`
	UpdatedAt   time.Time     `orm:"column(updated_at);type(timestamp);auto_now;null"`
	DeletedAt   time.Time     `orm:"column(deleted_at);null"`
}

func (t User) IsNode() {
	fmt.Println("This is an item")
}

func (t *User) TableName() string {
	return "users"
}
func (t *RolePermission) TableName() string {
	return "role_permission"
}
func (t *Permission) TableName() string {
	return "permissions"
}

func (t *Role) TableName() string {
	return "roles"
}
func (t *UserRole) TableName() string {
	return "user_role"
}

func init() {
	orm.RegisterModel(new(User), new(Role), new(UserRole), new(RolePermission), new(Permission), new(PermissionField), new(Field))
}

// AddUsers insert a new User into database and returns
// last inserted ID on success.
func AddUsers(m *User) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetUsersById retrieves User by ID. Returns error if
// ID doesn't exist
func GetUsersById(id string) (v *User, err error) {
	o := orm.NewOrm()
	v = &User{ID: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllUsers retrieves all User matches certain condition. Returns empty list if
// no records exist
func GetAllUsers(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(User))
	// query k=v
	for k, v := range query {
		// rewrite dot-notation to Object__Attribute
		k = strings.Replace(k, ".", "__", -1)
		if strings.Contains(k, "isnull") {
			qs = qs.Filter(k, v == "true" || v == "1")
		} else {
			qs = qs.Filter(k, v)
		}
	}
	// order by:
	var sortFields []string
	if len(sortby) != 0 {
		if len(sortby) == len(order) {
			// 1) for each sort field, there is an associated order
			for i, v := range sortby {
				orderby := ""
				if order[i] == "desc" {
					orderby = "-" + v
				} else if order[i] == "asc" {
					orderby = v
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
			qs = qs.OrderBy(sortFields...)
		} else if len(sortby) != len(order) && len(order) == 1 {
			// 2) there is exactly one order, all the sorted fields will be sorted by this order
			for _, v := range sortby {
				orderby := ""
				if order[0] == "desc" {
					orderby = "-" + v
				} else if order[0] == "asc" {
					orderby = v
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
		} else if len(sortby) != len(order) && len(order) != 1 {
			return nil, errors.New("Error: 'sortby', 'order' sizes mismatch or 'order' size is not 1")
		}
	} else {
		if len(order) != 0 {
			return nil, errors.New("Error: unused 'order' fields")
		}
	}
	
	var l []User
	qs = qs.OrderBy(sortFields...)
	if _, err = qs.Limit(limit, offset).All(&l, fields...); err == nil {
		if len(fields) == 0 {
			for _, v := range l {
				ml = append(ml, v)
			}
		} else {
			// trim unused fields
			for _, v := range l {
				m := make(map[string]interface{})
				val := reflect.ValueOf(v)
				for _, fname := range fields {
					m[fname] = val.FieldByName(fname).Interface()
				}
				ml = append(ml, m)
			}
		}
		return ml, nil
	}
	return nil, err
}

// UpdateUsers updates User by ID and returns error if
// the record to be updated doesn't exist
func UpdateUsersById(m *User) (err error) {
	o := orm.NewOrm()
	v := User{ID: m.ID}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeleteUsers deletes User by ID and returns error if
// the record to be deleted doesn't exist
func DeleteUsers(id string) (err error) {
	o := orm.NewOrm()
	v := User{ID: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&User{ID: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
