package db_error

import "errors"

var (
	DbConnectError = errors.New("faild to connect db server")
	QueryError     = errors.New("failed to db query")
	RowsScanError  = errors.New("failed to rows scan")
	StatementError = errors.New("failed to statement")
)
