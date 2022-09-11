package response

import "github.com/Doer-org/geekten_vol4_2022/domain/entity"

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

	for _, v := range articles {
		res := ArticleResponse{
			Id:     v.Id,
			Title:  v.Title,
			Likes:  v.Likes,
			Url:    v.Url,
			Author: v.Author,
			Kind:   v.Kind,
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
