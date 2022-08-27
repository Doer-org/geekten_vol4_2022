package middleware

import (
	"fmt"
	"net/http"
)

// panicからrecoveryする
// https://zenn.dev/spiegel/books/error-handling-in-golang/viewer/panics
func Recovery(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			err := recover()
			if err != nil {
				fmt.Println(err)
			}
		}()
		next.ServeHTTP(w, r)
	})
}
