package response

import "github.com/Doer-org/geekten_vol4_2022/domain/entity"

func NewArticleResponse(article *entity.Article) ArticleResponse {
	return ArticleResponse{
		Id:    article.Id,
		Title: article.Title,
		Likes: article.Likes,
		First: article.First,
		Tag:   article.Tag,
		Url:   article.Url,
	}
}

func NewArticleListResponse(articles []*entity.Article) []ArticleResponse {
	var resArticles []ArticleResponse

	for _, v := range articles {
		res := ArticleResponse{
			Id:    v.Id,
			Title: v.Title,
			Likes: v.Likes,
			First: v.First,
			Tag:   v.Tag,
			Url:   v.Url,
		}
		resArticles = append(resArticles, res)
	}

	return resArticles
}

type ArticleResponse struct {
	Id    int    `json:"id"`
	Title string `json:"title"`
	Likes int    `json:"likes"`
	First string `json:"first"`
	Tag   string `json:"tag"`
	Url   string `json:"url"`
}
