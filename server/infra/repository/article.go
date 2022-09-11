package repository

import (
	"database/sql"
	"log"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
	db_error "github.com/Doer-org/geekten_vol4_2022/error/db"
)

type articleRepository struct {
	db *sql.DB
}

func NewArticleRepository(db *sql.DB) repository.ArticleRepository {
	return &articleRepository{
		db: db,
	}
}

// 参考資料
// https://pkg.go.dev/database/sql@go1.17#pkg-index
// https://docs.google.com/presentation/d/1KE-81XbWdsiS6UASiwp3GWlmdHVFA81kewbw18r-DRA/edit#slide=id.g4fa6e8ab24_0_82

func (ar articleRepository) GetRandom() (*entity.Article, error) {

	const getRandomQuery = "SELECT * FROM articles LIMIT 1"
	rows, err := ar.db.Query(getRandomQuery)
	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}
	defer rows.Close()

	article := &entity.Article{}

	for rows.Next() {
		if err := rows.Scan(
			&article.Id,
			&article.Title,
			&article.Likes,
			&article.Url,
			&article.Author,
			&article.Kind,
		); err != nil {
			log.Println(db_error.RowsScanError)
			return nil, err
		}
	}
	return article, nil
}

func (ar articleRepository) GetRanking() ([]*entity.Article, error) {
	var articles []*entity.Article

	statement := "SELECT * FROM articles ORDER BY likes DESC LIMIT 100"
	rows, err := ar.db.Query(statement)
	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		article := &entity.Article{}
		if err := rows.Scan(
			&article.Id,
			&article.Title,
			&article.Likes,
			&article.Url,
			&article.Author,
			&article.Kind,
		); err != nil {
			log.Println(db_error.RowsScanError)
			return nil, err
		}
		articles = append(articles, article)
	}

	return articles, nil
}
