package response

import (
	"time"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

func NewArticleResponse(article *entity.Article) ArticleResponse {
	return ArticleResponse{
		Id:     article.Id,
		Title:  article.Title,
		Likes:  article.Likes,
		Url:    article.Url,
		Author: article.Author,
		Kind:   article.Kind,
	}
}

func NewArticleListResponse(articles []*entity.Article) []ArticleResponse {
	var resArticles []ArticleResponse

	for _, article := range articles {
		res := ArticleResponse{
			Id:     article.Id,
			Title:  article.Title,
			Likes:  article.Likes,
			Url:    article.Url,
			Author: article.Author,
			Kind:   article.Kind,
		}
		resArticles = append(resArticles, res)
	}

	return resArticles
}

type ArticleResponse struct {
	Id     int    `json:"id"`
	Title  string `json:"title"`
	Likes  int    `json:"likes"`
	Url    string `json:"url"`
	Author string `json:"author"`
	Kind   string `json:"kind"`
}

func NewHistoryListResponse(articles []*entity.Article, histories []*entity.History) []HistoryAriticleResponse {
	var resHistories []HistoryAriticleResponse

	for i, history := range histories {
		art := ArticleResponse{
			Id:     articles[i].Id,
			Title:  articles[i].Title,
			Likes:  articles[i].Likes,
			Url:    articles[i].Url,
			Author: articles[i].Author,
			Kind:   articles[i].Kind,
		}
		res := HistoryAriticleResponse{
			UserId:    history.UserId,
			ArticleId: history.ArticleId,
			CreatedAt: history.CreatedAt,
			Article:   art,
		}
		resHistories = append(resHistories, res)
	}

	return resHistories
}

func NewHistoryResponse(history *entity.History) HistoryResponse {
	return HistoryResponse{
		UserId:    history.UserId,
		ArticleId: history.ArticleId,
		CreatedAt: history.CreatedAt,
	}
}

type HistoryAriticleResponse struct {
	UserId    string    `json:"user_id"`
	ArticleId int       `json:"article_id"`
	CreatedAt time.Time `json:"created_at"`
	Article   ArticleResponse
}

type HistoryResponse struct {
	UserId    string    `json:"user_id"`
	ArticleId int       `json:"article_id"`
	CreatedAt time.Time `json:"created_at"`
}
