package repository

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type HistoryRepository interface {
	CreateHistory() (*entity.History, error)
}
