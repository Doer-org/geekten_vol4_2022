package repository

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type ArticleRepository interface {
	GetRandom() (*entity.Article, error)
	GetRanking() ([]*entity.Article, error)
}
