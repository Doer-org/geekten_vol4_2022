package usecase

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
)

type HistoryUsecase interface {
	CreateHistory(string, string) (*entity.User, error)
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
