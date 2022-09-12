package handler

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	handler_error "github.com/Doer-org/geekten_vol4_2022/error/handler"
	"github.com/Doer-org/geekten_vol4_2022/presen/response"
	"github.com/Doer-org/geekten_vol4_2022/usecase"
	"github.com/Doer-org/geekten_vol4_2022/utils"
)

type ArticleHandler interface {
	GetRandom(http.ResponseWriter, *http.Request)
	GetRanking(w http.ResponseWriter, r *http.Request)
	CreateHistory(http.ResponseWriter, *http.Request)
	GetHistory(http.ResponseWriter, *http.Request)
}

type articleHandler struct {
	articleUsecase usecase.ArticleUsecase
}

func NewArticlehandler(au usecase.ArticleUsecase) ArticleHandler {
	return articleHandler{
		articleUsecase: au,
	}
}

func (ah articleHandler) GetRandom(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	article, err := ah.articleUsecase.GetRandom(r.Context())

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getrandom")
		log.Println(err)
		return
	}

	resArticle := response.NewArticleResponse(article)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resArticle); err != nil {
		log.Println(err)
	}
	return
}

func (ah articleHandler) GetRanking(w http.ResponseWriter, r *http.Request) {
	articles, err := ah.articleUsecase.GetRanking()

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getranking")
		log.Println(err)
		return
	}

	resArticles := response.NewArticleListResponse(articles)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resArticles); err != nil {
		log.Println(err)
	}
	return
}

func (uh articleHandler) CreateHistory(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	newUserId := r.FormValue("user_id")
	newArticleId, _ := strconv.Atoi(r.FormValue("article_id"))

	history, err := uh.articleUsecase.CreateHistory(newUserId, newArticleId)

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

func (uh articleHandler) GetHistory(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	newUserId := r.FormValue("user_id")

	historys, article, err := uh.articleUsecase.GetHistory(newUserId)

	if historys == nil {
		utils.CreateErrorResponse(w, r, "id not found")
		return
	}

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to gethistory")
		return
	}
	fmt.Print(w, historys, article)
	resHistory := response.NewHistoryListResponse(article, historys)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resHistory); err != nil {
		log.Println(err)
		return
	}
	return

}
