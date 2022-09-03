package handler

import (
	"log"
	"net/http"
	"io"

	"github.com/Doer-org/geekten_vol4_2022/error/handler"
)


func health(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		log.Println(handler_error.MethodNotAllowd)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	io.WriteString(w, `{"alive": true}`)
}
