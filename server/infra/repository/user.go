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

func (ur userRepository) GetUser(id string) (*entity.User, error) {

	stmt, err := ur.db.Query("SELECT id, name FROM users where id = $1", id)

	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	user := &entity.User{}
	defer stmt.Close()

	for stmt.Next() {
		err := stmt.Scan(&user.Id, &user.Name)
		if err != nil {
			log.Println(db_error.RowsScanError)
			return nil, err
		}
	}

	return user, nil
}

func (ur userRepository) CreateFavorite(user_id string, article_id int) (*entity.Favorite, error) {
	statement := "INSERT INTO favorite VALUES($1,$2) returning user_id,article_id"

	// returning user_id,article_id

	stmt, err := ur.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	defer stmt.Close()

	favorite := &entity.Favorite{}
	err = stmt.QueryRow(user_id, article_id).Scan(&favorite.UserId, &favorite.ArticleId)

	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}

	return favorite, nil
}

func (ur userRepository) ArticleLikesPlus(article_id int) (*entity.Article, error) {
	statement := "UPDATE articles SET likes = likes + 1 where id = $1 returning id, title, likes, url, author, kind"

	stmt, err := ur.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	defer stmt.Close()

	article := &entity.Article{}
	err = stmt.QueryRow(article_id).Scan(&article.Id,
		&article.Title,
		&article.Likes,
		&article.Url,
		&article.Author,
		&article.Kind)

	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}

	return article, nil
}

func (ur userRepository) DeleteFavorite(user_id string, article_id int) error {
	statement := "DELETE FROM favorite WHERE user_id = $1 AND article_id = $2"

	// returning user_id,article_id

	stmt, err := ur.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return err
	}
	defer stmt.Close()

	favorite := &entity.Favorite{}
	err = stmt.QueryRow(user_id, article_id).Scan(&favorite.UserId, &favorite.ArticleId)

	if err != nil {
		log.Println(db_error.QueryError)
		return err
	}

	return nil

}
