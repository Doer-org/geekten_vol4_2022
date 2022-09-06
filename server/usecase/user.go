package usecase

import (
	"context"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
)

type UserUsecase interface {
	CreateUser(context.Context) (*entity.User, error)
}

type userUsecase struct {
	userRepository repository.UserRepository
}

func NewUserUsecase(ur repository.UserRepository) UserUsecase {
	return userUsecase{
		userRepository: ur,
	}
}

func (ur userUsecase) CreateUser(ctx context.Context) (*entity.User, error) {
	user, err := ur.userRepository.CreateUser()
	return user, err
}
