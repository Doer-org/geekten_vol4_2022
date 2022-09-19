package repository

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type ArticleRepository interface {
	GetRandom(string) (*entity.Article, error)
	GetRanking() ([]*entity.Article, error)
	CreateHistory(string, int) (*entity.History, error)
	GetHistory(string) ([]*entity.History, []*entity.Article, error)
	GetRandomRelated() ([]*entity.Article, error)
}
