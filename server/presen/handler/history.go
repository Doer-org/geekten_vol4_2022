package handler

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"

	handler_error "github.com/Doer-org/geekten_vol4_2022/error/handler"
	"github.com/Doer-org/geekten_vol4_2022/presen/response"
	"github.com/Doer-org/geekten_vol4_2022/usecase"
	"github.com/Doer-org/geekten_vol4_2022/utils"
)

type HistoryHandler interface {
	CreateHistory(http.ResponseWriter, *http.Request)
}

type historyHandler struct {
	userUsecase usecase.HistoryUsecase
}

func NewHistoryhandler(uu usecase.HistoryUsecase) HistoryHandler {
	return historyHandler{
		userUsecase: uu,
	}
}

var layout = "2006-01-02 15:04:05"

func stringToTime(str string) time.Time {
	t, _ := time.Parse(layout, str)
	return t
}

func (uh historyHandler) CreateHistory(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	newUserId := r.FormValue("user_id")
	newArticleId, _ := strconv.Atoi(r.FormValue("article_id"))
	//newTime := stringToTime(r.FormValue("created_at"))
	newTime := time.Now()

	history, err := uh.userUsecase.CreateHistory(newUserId, newArticleId, newTime)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to createhistory")
		return
	}
	resHistory := response.NewHistoryResponse(history)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resHistory); err != nil {
		log.Println(err)
	}
	return
}
