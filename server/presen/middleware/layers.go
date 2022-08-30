package middleware

import "net/http"

func Layres(handler http.Handler) http.Handler {
	return Recovery(
		CORS(
			Context(
				Logger(
					handler,
				),
			),
		),
	)
}
