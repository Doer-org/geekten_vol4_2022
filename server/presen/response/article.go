package response

import "github.com/Doer-org/geekten_vol4_2022/domain/entity"

func NewArticleResponse(article *entity.Article) ArticleResponse {
	return ArticleResponse{
		Title: article.Title,
		Url:   article.Url,
	}
}

type ArticleResponse struct {
	Title string `json:"title"`
	Url   string `json:"url"`
}
