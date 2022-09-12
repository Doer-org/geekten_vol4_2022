package repository

import (
	"database/sql"
	"log"
	"time"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
	db_error "github.com/Doer-org/geekten_vol4_2022/error/db"
)

type historyRepository struct {
	db *sql.DB
}

func NewHistoryRepository(db *sql.DB) repository.HistoryRepository {
	return &historyRepository{
		db: db,
	}
}

func (hr historyRepository) CreateHistory(user_id string, article_id int, time time.Time) (*entity.History, error) {
	statement := "INSERT INTO historys VALUES($1,$2,$3) returning user_id, article_id, created_at"

	stmt, err := hr.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	defer stmt.Close()

	history := &entity.History{}
	err = stmt.QueryRow(user_id, article_id, time).Scan(&history.UserId, &history.ArticleId, &history.CreatedAt)

	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}

	return history, nil
}
