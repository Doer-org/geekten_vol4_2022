package utils

import (
	"encoding/json"
	"net/http"
)

type Error struct {
	Status int
	Result string
}

func CreateErrorResponse(w http.ResponseWriter, r *http.Request, errormessage string) {
	ping := Error{http.StatusOK, errormessage}

	res, err := json.Marshal(ping)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}
