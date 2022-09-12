package repository

import (
	"time"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

type HistoryRepository interface {
	CreateHistory(string, int, time.Time) (*entity.History, error)
}
