// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

type DashboardMenus struct {
	SidebarTop    *Menu `json:"sidebarTop"`
	SidebarBottom *Menu `json:"sidebarBottom"`
}

type Error struct {
	String string `json:"string"`
	Status int    `json:"status"`
}

type IntFilter struct {
	Eq         *bool      `json:"eq"`
	BeginsWith *bool      `json:"beginsWith"`
	EndsWith   *bool      `json:"endsWith"`
	Gt         *bool      `json:"gt"`
	Gte        *bool      `json:"gte"`
	Lt         *bool      `json:"lt"`
	Lte        *bool      `json:"lte"`
	And        *IntFilter `json:"and"`
	Or         *IntFilter `json:"or"`
}

type Menu struct {
	Items []*MenuItem `json:"items"`
}

type MenuItem struct {
	Name  *string `json:"name"`
	Icon  *string `json:"icon"`
	Route *string `json:"route"`
}

type Pagination struct {
	CurrentPage  *int `json:"currentPage"`
	PrevPage     *int `json:"prevPage"`
	NextPage     *int `json:"nextPage"`
	TotalItems   *int `json:"totalItems"`
	ItemsPerPage *int `json:"itemsPerPage"`
}

type StringFilter struct {
	Eq         *bool         `json:"eq"`
	Contains   *bool         `json:"contains"`
	BeginsWith *bool         `json:"beginsWith"`
	EndsWith   *bool         `json:"endsWith"`
	And        *StringFilter `json:"and"`
	Or         *StringFilter `json:"or"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type UserList struct {
	Users      []*User     `json:"users"`
	Pagination *Pagination `json:"pagination"`
}

type UserListFilter struct {
	ID   *StringFilter   `json:"id"`
	Name *StringFilter   `json:"name"`
	And  *UserListFilter `json:"and"`
	Or   *UserListFilter `json:"or"`
}

type UserLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type UserToken struct {
	Token string `json:"token"`
	Error *Error `json:"error"`
	User  *User  `json:"user"`
}
