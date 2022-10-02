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
	_, err = r.CreateUser("testid_update", "testname")

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
			id:      "testid_update",
			wantErr: nil,
		},
		{
			name:    "存在しないIDはupdateできない",
			id:      "test_update_DekinaiId",
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

	r := &userRepository{db: db_test}
	_, err = r.CreateUser("test_get_id", "test_get_name")

	tests := []struct {
		name    string
		id      string
		wantName string
	}{
		{
			name:    "存在するidはgetできる",
			id:      "test_get_id",
			wantName: "test_get_name",
		},
		{
			name:    "存在しないidはgetできない",
			id:      "test_get_DekinaiId",
			wantName: "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &userRepository{db: db_test}

			if user, err := r.GetUser(tt.id); 
			if user.name != tt.wantName {
				t.Errorf("Get() name = %v, wantName %v", err, tt.wantName)
			}
		})
	}
}
