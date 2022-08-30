package handler_error

import "errors"

var (
	MethodNotAllowd = errors.New("request method not allowd")
)
