package handler

import (
	"encoding/json"
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
	GetRandomRelated(w http.ResponseWriter, r *http.Request)
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
	types := r.URL.Query().Get("type")
	if types == "" {
		utils.CreateErrorResponse(w, r, "types empty", nil)
		return
	}

	article, err := ah.articleUsecase.GetRandom(types)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getrandom", err)
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

func (ah articleHandler) GetRandomRelated(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	articles, err := ah.articleUsecase.GetRandomRelated()

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getrandomRelated", err)
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

func (ah articleHandler) GetRanking(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	articles, err := ah.articleUsecase.GetRanking()

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getranking", err)
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
	if newUserId == "" {
		utils.CreateErrorResponse(w, r, "user_id empty", nil)
		return
	}

	newArticleId, err := strconv.Atoi(r.FormValue("article_id"))

	if err != nil {
		utils.CreateErrorResponse(w, r, "id not number", err)
		return
	}

	history, err := uh.articleUsecase.CreateHistory(newUserId, newArticleId)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to createhistory", err)
		return
	}
	resHistory := response.NewHistoryResponse(history)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resHistory); err != nil {
		log.Println(err)
	}
}

func (uh articleHandler) GetHistory(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	newUserId := r.FormValue("user_id")
	if newUserId == "" {
		utils.CreateErrorResponse(w, r, "user_id empty", nil)
		return
	}

	histories, article, err := uh.articleUsecase.GetHistory(newUserId)

	if histories == nil {
		utils.CreateErrorResponse(w, r, "id not found", err)
		return
	}

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to gethistory", err)
		return
	}

	resHistory := response.NewHistoryListResponse(article, histories)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resHistory); err != nil {
		log.Println(err)
		return
	}

}
