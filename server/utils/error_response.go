package utils

import (
	"encoding/json"
	"log"
	"net/http"
)

type ErrorResponse struct {
	Status int
	Result string
}

func CreateErrorResponse(w http.ResponseWriter, r *http.Request, errormessage string, err error) {
	log.Println(err)
	errResponse := ErrorResponse{http.StatusOK, errormessage}

	res, err := json.Marshal(errResponse)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}
