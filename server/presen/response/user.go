package response

import "github.com/Doer-org/geekten_vol4_2022/domain/entity"

func NewUserResponse(user *entity.User) UserResponse {
	return UserResponse{
		Name: user.Name,
		Id:   user.Id,
	}
}

func NewFavoriteResponse(favorite *entity.Favorite, article *entity.Article) FavArtResponse {
	art := ArticleResponse{
		Id:     article.Id,
		Title:  article.Title,
		Likes:  article.Likes,
		Url:    article.Url,
		Author: article.Author,
		Kind:   article.Kind,
	}
	favart := FavArtResponse{
		Article:   art,
		UserId:    favorite.UserId,
		ArticleId: favorite.ArticleId,
	}
	return favart
}

type UserResponse struct {
	Name string `json:"name"`
	Id   string `json:"id"`
}

type FavoriteResponse struct {
	UserId    string `json:"user_id"`
	ArticleId int    `json:"article_id"`
}

type FavArtResponse struct {
	Article   ArticleResponse
	UserId    string `json:"user_id"`
	ArticleId int    `json:"article_id"`
}
