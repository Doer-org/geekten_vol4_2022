package handler

import (
	"fmt"
	"net/http"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/usecase"
	_ "github.com/lib/pq"
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
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	r.ParseForm()

	new_name := r.FormValue("name")
	new_id := r.FormValue("id")

	user := &entity.User{}
	user.Id = new_id
	user.Name = new_name

	fmt.Print(w, new_name, new_id)
}
