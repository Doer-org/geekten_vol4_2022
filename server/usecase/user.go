package usecase

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
)

type UserUsecase interface {
	CreateUser(string, string) (*entity.User, error)
	UpdateUser(string, string) (*entity.User, error)
	GetUser(string) (*entity.User, error)
	CreateFavorite(string, int) (*entity.Favorite, error)
	ArticleLikesPlus(int) (*entity.Article, error)
	DeleteFavorite(string, int) error
}

type userUsecase struct {
	userRepository repository.UserRepository
}

func NewUserUsecase(ur repository.UserRepository) UserUsecase {
	return userUsecase{
		userRepository: ur,
	}
}

func (ur userUsecase) CreateUser(id string, name string) (*entity.User, error) {
	user, err := ur.userRepository.CreateUser(id, name)
	return user, err
}

func (ur userUsecase) UpdateUser(id string, name string) (*entity.User, error) {
	user, err := ur.userRepository.UpdateUser(id, name)
	return user, err
}

func (ur userUsecase) GetUser(id string) (*entity.User, error) {
	user, err := ur.userRepository.GetUser(id)
	return user, err
}

func (ur userUsecase) CreateFavorite(user_id string, article_id int) (*entity.Favorite, error) {
	fav, err := ur.userRepository.CreateFavorite(user_id, article_id)
	return fav, err
}

func (ur userUsecase) ArticleLikesPlus(article_id int) (*entity.Article, error) {
	article, err := ur.userRepository.ArticleLikesPlus(article_id)
	return article, err
}

func (ur userUsecase) DeleteFavorite(user_id string, article_id int) error {
	err := ur.userRepository.DeleteFavorite(user_id, article_id)
	return err
}
