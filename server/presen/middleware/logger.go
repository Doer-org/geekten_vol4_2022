package middleware

import (
	"log"
	"net/http"
	"time"
)

func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(rw, r)
		end := time.Now()
		sub := end.Sub(start)
		latency := int64(sub / time.Millisecond)
		log.Println("incoming request", r, start, latency)
	})
}
