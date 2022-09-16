package repository

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type UserRepository interface {
	CreateUser(string, string) (*entity.User, error)
	UpdateUser(string, string) (*entity.User, error)
	GetUser(string) (*entity.User, error)
	CreateFavorite(string, int) (*entity.Favorite, error)
	ArticleLikesPlus(int) (*entity.Article, error)
	DeleteFavorite(string, int) error
	ArticleLikesMinus(int) (*entity.Article, error)
	GetFavorite(string) ([]*entity.Favorite, []*entity.Article, error)
}
