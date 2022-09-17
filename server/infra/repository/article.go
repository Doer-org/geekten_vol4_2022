package repository

import (
	"database/sql"
	"log"
	"math/rand"
	"time"

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

func (ar articleRepository) GetRandom(types string) (*entity.Article, error) {
	var articles []*entity.Article
	rand.Seed(time.Now().UnixNano())
	randomNumber := rand.Intn(49)

	var getRandomQuery string

	switch types {
	case "popularity":
		getRandomQuery = "SELECT * FROM articles ORDER BY likes DESC LIMIT 50"
	case "nich":
		getRandomQuery = "SELECT * FROM articles ORDER BY likes ASC LIMIT 50"
	case "normal":
		getRandomQuery = "SELECT * FROM articles LIMIT 50"
	}

	rows, err := ar.db.Query(getRandomQuery)
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
	resarticle := &entity.Article{}
	resarticle = articles[randomNumber]
	return resarticle, nil
}

func (ar articleRepository) GetRandomTen() ([]*entity.Article, error) {
	var articles []*entity.Article

	getRandomQuery := "SELECT * FROM articles"

	rows, err := ar.db.Query(getRandomQuery)
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

	var resarticles []*entity.Article
	sizeart := len(articles)
	used := make([]int, sizeart+1, sizeart+1)

	for i := 0; i <= sizeart; i++ {
		used[i] = -1
	}

	for i := 0; i < 10; i++ {
		for {
			rand.Seed(time.Now().UnixNano())
			randomNumber := rand.Intn(sizeart)
			if used[randomNumber] == -1 {
				used[randomNumber] = 1
				resarticles = append(resarticles, articles[randomNumber])
				break
			}
		}

	}

	return resarticles, nil
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

func (ar articleRepository) CreateHistory(user_id string, article_id int) (*entity.History, error) {
	statement := "INSERT INTO historys (user_id, article_id) VALUES($1,$2) returning user_id, article_id, created_at"

	stmt, err := ar.db.Prepare(statement)
	if err != nil {
		log.Println(db_error.StatementError)
		return nil, err
	}
	defer stmt.Close()

	history := &entity.History{}
	err = stmt.QueryRow(user_id, article_id).Scan(&history.UserId, &history.ArticleId, &history.CreatedAt)

	if err != nil {
		log.Println(db_error.QueryError)
		return nil, err
	}

	return history, nil
}

func (ar articleRepository) GetHistory(user_id string) ([]*entity.History, []*entity.Article, error) {
	var historys []*entity.History
	var articles []*entity.Article

	statement := "SELECT h.article_id AS id,a.title,a.likes,a.url,a.author,a.kind,h.created_at FROM historys h INNER JOIN articles a ON h.article_id = a.id where user_id = $1 ORDER BY h.created_at DESC LIMIT 7"
	rows, err := ar.db.Query(statement, user_id)
	if err != nil {
		log.Println(db_error.QueryError)
		return nil, nil, err
	}

	defer rows.Close()

	for rows.Next() {
		history := &entity.History{}
		article := &entity.Article{}
		if err := rows.Scan(
			&history.ArticleId,
			&article.Title,
			&article.Likes,
			&article.Url,
			&article.Author,
			&article.Kind,
			&history.CreatedAt,
		); err != nil {
			log.Println(db_error.RowsScanError)
			return nil, nil, err
		}
		history.UserId = user_id
		articles = append(articles, article)
		historys = append(historys, history)
	}

	return historys, articles, nil
}

func (ar articleRepository) GetFavorite(user_id string) ([]*entity.Favorite, []*entity.Article, error) {
	var favorites []*entity.Favorite
	var articles []*entity.Article

	statement := "SELECT h.article_id AS id,a.title,a.likes,a.url,a.author,a.kind FROM historys h INNER JOIN articles a ON h.article_id = a.id where user_id = $1 ORDER BY h.created_at DESC LIMIT 7"
	rows, err := ar.db.Query(statement, user_id)
	if err != nil {
		log.Println(db_error.QueryError)
		return nil, nil, err
	}

	defer rows.Close()

	for rows.Next() {
		favorite := &entity.Favorite{}
		article := &entity.Article{}
		if err := rows.Scan(
			&favorite.ArticleId,
			&article.Title,
			&article.Likes,
			&article.Url,
			&article.Author,
			&article.Kind,
		); err != nil {
			log.Println(db_error.RowsScanError)
			return nil, nil, err
		}
		favorite.UserId = user_id
		articles = append(articles, article)
		favorites = append(favorites, favorite)
	}

	return favorites, articles, nil
}
