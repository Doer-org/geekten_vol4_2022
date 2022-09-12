package repository

import (
	"database/sql"
	"log"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
	db_error "github.com/Doer-org/geekten_vol4_2022/error/db"
)

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) repository.UserRepository {
	return &userRepository{
		db: db,
	}
}

func (ur userRepository) CreateUser(id string, name string) (*entity.User, error) {
	statement := "INSERT INTO users VALUES($1,$2) returning id, name"

	stmt, err := ur.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	defer stmt.Close()

	user := &entity.User{}
	err = stmt.QueryRow(id, name).Scan(&user.Id, &user.Name)

	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}

	return user, nil
}

func (ur userRepository) UpdateUser(id string, name string) (*entity.User, error) {
	statement := "update users set name = $2 where id = $1 returning id, name"

	stmt, err := ur.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	defer stmt.Close()
	user := &entity.User{}

	err = stmt.QueryRow(id, name).Scan(&user.Id, &user.Name)

	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}
	return user, nil
}

func (ur userRepository) GetUser (id string) (*entity.User, error) {

	stml, err := ur.db.Query ("SELECT id, name FROM users where id = $1", id)

	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	user := &entity.User{}
    defer stml.Close ()

	for stml.Next () {
		err := stml.Scan(&user.Id, &user.Name)
		if err != nil {
			log.Println(db_error.RowsScanError)
			return nil, err
		}
	}

    return user, nil
}