package handler_error

import "errors"

var (
	MethodNotAllowd = errors.New("request method not allowd")
	CreateUserError = errors.New("faild to createuser")
)
