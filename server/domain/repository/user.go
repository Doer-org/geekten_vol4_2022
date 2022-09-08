package repository

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type UserRepository interface {
	CreateUser(string, string) (*entity.User, error)
}
