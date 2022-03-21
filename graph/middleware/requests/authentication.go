package requests

// AuthenticationRequest is used to receive post values for authentication
type AuthenticationRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type AuthenticationRefreshRequest struct {
	Token string `json:"token"`
}
type AuthenticationLogoutRequest struct {
	JWTID string `json:"jti"`
}

type ResetPasswordRequest struct {
	Password string  `json:"password"`
	ConfirmPassword string  `json:"confirm_password"`
	Hash string  `json:"hash"`
}

// Validate function defined the validation functionality for request
func (request AuthenticationRequest) Validate() bool {
	if (request.Username != "") && (request.Password != "") {
		return true
	}
	return false
}

// Validate function defined the validation functionality for request
func (request AuthenticationRefreshRequest) Validate() bool {
	if request.Token != "" {
		return true
	}
	return false
}
