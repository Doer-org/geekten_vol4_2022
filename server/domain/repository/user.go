package repository

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type UserRepository interface {
	CreateUser() (*entity.User, error)
}
