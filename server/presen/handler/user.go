package handler

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"

	handler_error "github.com/Doer-org/geekten_vol4_2022/error/handler"
	"github.com/Doer-org/geekten_vol4_2022/presen/response"
	"github.com/Doer-org/geekten_vol4_2022/usecase"
	"github.com/Doer-org/geekten_vol4_2022/utils"
)

type UserHandler interface {
	CreateUser(http.ResponseWriter, *http.Request)
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
	newId := r.FormValue("id")

	user, err := uh.userUsecase.CreateUser(newId, newName)

	err = errors.New("hogego")
	if err != nil {
		utils.CreateErrorResponse(w, r, "faild to createuser")
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
