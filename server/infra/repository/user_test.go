package repository

import (
	"errors"
	"log"
	"testing"

	db_error "github.com/Doer-org/geekten_vol4_2022/error/db"
	"github.com/Doer-org/geekten_vol4_2022/infra/db"
)

func Test_UserCreate(t *testing.T) {
	db_test := db.NewDriver()
	err := db_test.Ping()

	if err != nil {
		log.Println("DB connect error")
	}

	tests := []struct {
		name    string
		id      string
		wantErr error
	}{
		{
			name:    "存在しないIDは作成できる",
			id:      "testid",
			wantErr: nil,
		},
		{
			name:    "存在するIDは作成できない",
			id:      "testid",
			wantErr: db_error.QueryError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &userRepository{db: db_test}

			if _, err := r.CreateUser(tt.id, tt.name); !errors.Is(err, tt.wantErr) {
				t.Errorf("CreateUser() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}

}

func Test_UserUpadate(t *testing.T) {
	db_test := db.NewDriver()
	err := db_test.Ping()

	if err != nil {
		log.Println("DB connect error")
	}

	r := &userRepository{db: db_test}
	_, err = r.CreateUser("testid", "testname")

	if err != nil {
		log.Println("create user error")
	}

	tests := []struct {
		name    string
		id      string
		wantErr error
	}{
		{
			name:    "存在するIDはupdateできる",
			id:      "testid",
			wantErr: nil,
		},
		{
			name:    "存在しないIDはupdateできない",
			id:      "testDekinaiId",
			wantErr: db_error.QueryError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &userRepository{db: db_test}

			if _, err := r.UpdateUser(tt.id, tt.name); !errors.Is(err, tt.wantErr) {
				t.Errorf("Upadate() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func Test_UserGet(t *testing.T) {
	db_test := db.NewDriver()
	err := db_test.Ping()

	if err != nil {
		log.Println("DB connect error")
	}

	tests := []struct {
		name    string
		id      string
		wantErr error
	}{
		{
			name:    "存在するidはgetできる",
			id:      "testid",
			wantErr: nil,
		},
		{
			name:    "存在しないidはgetできる",
			id:      "testDekinaiId",
			wantErr: db_error.QueryError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &userRepository{db: db_test}

			if _, err := r.GetUser(tt.id); !errors.Is(err, tt.wantErr) {
				t.Errorf("Get() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
