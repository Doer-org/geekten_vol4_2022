package response

import "github.com/Doer-org/geekten_vol4_2022/domain/entity"

func NewUserResponse(user *entity.User) UserResponse {
	return UserResponse{
		Name: user.Name,
		Id:   user.Id,
	}
}

func NewFavoriteResponse(favorite *entity.Favorite, article *entity.Article) FavoriteArticleResponse {
	art := ArticleResponse{
		Id:     article.Id,
		Title:  article.Title,
		Likes:  article.Likes,
		Url:    article.Url,
		Author: article.Author,
		Kind:   article.Kind,
	}
	favart := FavoriteArticleResponse{
		Article:   art,
		UserId:    favorite.UserId,
		ArticleId: favorite.ArticleId,
	}
	return favart
}

func NewFavoriteListResponse(articles []*entity.Article, favorites []*entity.Favorite) []FavoriteArticleResponse {
	var resFavorites []FavoriteArticleResponse

	for i, favorite := range favorites {
		art := ArticleResponse{
			Id:     articles[i].Id,
			Title:  articles[i].Title,
			Likes:  articles[i].Likes,
			Url:    articles[i].Url,
			Author: articles[i].Author,
			Kind:   articles[i].Kind,
		}
		res := FavoriteArticleResponse{
			UserId:    favorite.UserId,
			ArticleId: favorite.ArticleId,
			Article:   art,
		}
		resFavorites = append(resFavorites, res)
	}

	return resFavorites
}

type UserResponse struct {
	Name string `json:"name"`
	Id   string `json:"id"`
}

type FavoriteArticleResponse struct {
	Article   ArticleResponse
	UserId    string `json:"user_id"`
	ArticleId int    `json:"article_id"`
}
