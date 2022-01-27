// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

type NewTodo struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type Sample struct {
	ID string `json:"id"`
}

type Todo struct {
	ID   string `json:"id"`
	Text string `json:"text"`
	Done bool   `json:"done"`
	User *User  `json:"user"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type UserAuthenticated struct {
	Token string `json:"token"`
	User  *User  `json:"user"`
}

type UserLogin struct {
	Username string  `json:"username"`
	Password *string `json:"password"`
}
