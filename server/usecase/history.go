package usecase

import (
	"time"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
)

type HistoryUsecase interface {
	CreateHistory(string, int, time.Time) (*entity.History, error)
}

type historyUsecase struct {
	historyRepository repository.HistoryRepository
}

func NewHistoryUsecase(hr repository.HistoryRepository) HistoryUsecase {
	return historyUsecase{
		historyRepository: hr,
	}
}

func (ur historyUsecase) CreateHistory(user_id string, article_id int, time time.Time) (*entity.History, error) {
	history, err := ur.historyRepository.CreateHistory(user_id, article_id, time)
	return history, err
}
