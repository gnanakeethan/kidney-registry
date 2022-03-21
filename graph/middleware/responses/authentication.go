package responses

// Authentication defines the success request of a authenticationrequest
type Authentication struct {
	Success bool   `json:"success"`
	Token   string `json:"token"`
}
