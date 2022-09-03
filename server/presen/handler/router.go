package handler

import (
	"net/http"

	"github.com/Doer-org/geekten_vol4_2022/presen/middleware"
)

func InitRouter(articleHandler ArticleHandler) {
	// health
	http.Handle("/api", middleware.Layres(http.HandlerFunc(health)))

	// article
	articleGetRandom := http.HandlerFunc(articleHandler.GetRandom)
	http.Handle("/api/article/random", middleware.Layres(articleGetRandom))
}
