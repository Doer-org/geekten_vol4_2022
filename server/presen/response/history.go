package response

import (
	"time"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
)

func NewHistoryResponse(history *entity.History) HistoryResponse {
	return HistoryResponse{
		UserId:    history.UserId,
		ArticleId: history.ArticleId,
		CreatedAt: history.CreatedAt,
	}
}

type HistoryResponse struct {
	UserId    string    `json:"user_id"`
	ArticleId int       `json:"article_id"`
	CreatedAt time.Time `json:"created_at"`
}
