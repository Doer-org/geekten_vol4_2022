package handler

import (
	"encoding/json"
	"log"
	"net/http"

	handler_error "github.com/Doer-org/geekten_vol4_2022/error/handler"
	"github.com/Doer-org/geekten_vol4_2022/presen/response"
	"github.com/Doer-org/geekten_vol4_2022/usecase"
	"github.com/Doer-org/geekten_vol4_2022/utils"
)

type ArticleHandler interface {
	GetRandom(http.ResponseWriter, *http.Request)
	GetRanking(w http.ResponseWriter, r *http.Request)
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
		log.Println(err)
	}

	resArticle := response.NewArticleResponse(article)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resArticle); err != nil {
		log.Println(err)
	}
}

func (ah articleHandler) GetRanking(w http.ResponseWriter, r *http.Request) {
	articles, err := ah.articleUsecase.GetRanking()

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getranking")
		log.Println(err)
	}

	resArticles := response.NewArticleListResponse(articles)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resArticles); err != nil {
		log.Println(err)
	}
}
