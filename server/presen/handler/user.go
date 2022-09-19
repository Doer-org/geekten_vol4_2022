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

type UserHandler interface {
	CreateUser(http.ResponseWriter, *http.Request)
	UpdateUser(http.ResponseWriter, *http.Request)
	GetUser(http.ResponseWriter, *http.Request)
	CreateFavorite(w http.ResponseWriter, r *http.Request)
	DeleteFavorite(w http.ResponseWriter, r *http.Request)
	GetFavorite(w http.ResponseWriter, r *http.Request)
}

type userHandler struct {
	userUsecase usecase.UserUsecase
}

func NewUserhandler(uu usecase.UserUsecase) UserHandler {
	return userHandler{
		userUsecase: uu,
	}
}

func (uh userHandler) CreateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	newName := r.FormValue("name")
	if newName == "" {
		utils.CreateErrorResponse(w, r, "name empty", nil)
		return
	}

	newId := r.FormValue("id")
	if newId == "" {
		utils.CreateErrorResponse(w, r, "id empty", nil)
		return
	}

	user, err := uh.userUsecase.CreateUser(newId, newName)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to createuser", err)
		return
	}
	resUser := response.NewUserResponse(user)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resUser); err != nil {
		log.Println(err)
	}
}

func (uh userHandler) UpdateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "PUT" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}
	newName := r.FormValue("name")
	if newName == "" {
		utils.CreateErrorResponse(w, r, "name empty", nil)
		return
	}

	newId := r.FormValue("id")
	if newId == "" {
		utils.CreateErrorResponse(w, r, "id empty", nil)
		return
	}

	user, err := uh.userUsecase.UpdateUser(newId, newName)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to updateuser", err)
		return
	}
	resUser := response.NewUserResponse(user)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resUser); err != nil {
		log.Println(err)
	}
}

func (uh userHandler) GetUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	newId := r.FormValue("id")
	if newId == "" {
		utils.CreateErrorResponse(w, r, "id empty", nil)
		return
	}
	user, err := uh.userUsecase.GetUser(newId)

	if user.Id == "" {
		utils.CreateErrorResponse(w, r, "id not found", nil)
		return
	}

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getuser", err)
		return
	}
	resUser := response.NewUserResponse(user)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resUser); err != nil {
		log.Println(err)
	}

}

func (uh userHandler) CreateFavorite(w http.ResponseWriter, r *http.Request) {
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

	favorite, err := uh.userUsecase.CreateFavorite(newUserId, newArticleId)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to createfavorite", err)
		return
	}

	article, err := uh.userUsecase.ArticleLikesPlus(newArticleId)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to articleLikesPlus", err)
		return
	}

	resFavorite := response.NewFavoriteResponse(favorite, article)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resFavorite); err != nil {
		log.Println(err)
	}
}

func (uh userHandler) DeleteFavorite(w http.ResponseWriter, r *http.Request) {
	if r.Method != "DELETE" {
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

	err_deletefav := uh.userUsecase.DeleteFavorite(newUserId, newArticleId)

	if err_deletefav != nil {
		utils.CreateErrorResponse(w, r, "faild to deletefavorite", err)
		return
	}

	article, err := uh.userUsecase.ArticleLikesMinus(newArticleId)

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to articleLikesMinus", err)
		return
	}

	resArticle := response.NewArticleResponse(article)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resArticle); err != nil {
		log.Println(err)
	}
}

func (uh userHandler) GetFavorite(w http.ResponseWriter, r *http.Request) {
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

	favorites, article, err := uh.userUsecase.GetFavorite(newUserId)

	if favorites == nil {
		utils.CreateErrorResponse(w, r, "id not found", err)
		return
	}

	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to getfavorite", err)
		return
	}

	resFavorite := response.NewFavoriteListResponse(article, favorites)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(resFavorite); err != nil {
		log.Println(err)
		return
	}

}
