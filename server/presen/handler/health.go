package handler

import (
	"io"
	"net/http"

	handler_error "github.com/Doer-org/geekten_vol4_2022/error/handler"
	"github.com/Doer-org/geekten_vol4_2022/utils"
)

func health(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		utils.CreateErrorResponse(w, r, "method not allowed", handler_error.MethodNotAllowd)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	io.WriteString(w, `{"alive": true}`)
}
