package repository

import (
	"database/sql"
	"log"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
	_ "github.com/lib/pq"
)

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) repository.UserRepository {
	return &userRepository{
		db: db,
	}
}

var Db *sql.DB

func (ur userRepository) CreateUser() (*entity.User, error) {
	statement := "insert into users (name,id) values ($1,$2) returning id"
	stmt, err := Db.Prepare(statement)
	if err != nil {
		log.Fatalln(err)
		return nil, err
	}

	user := &entity.User{}
	var id int

	defer stmt.Close()
	err = stmt.QueryRow(user.Name, user.Id).Scan(id)

	return nil, nil
}
