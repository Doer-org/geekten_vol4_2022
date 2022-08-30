package handler

import (
	"net/http"

	"github.com/Doer-org/geekten_vol4_2022/presen/middleware"
)

func InitRouter(articleHandler ArticleHandler) {
	articleGetRandom := http.HandlerFunc(articleHandler.GetRandom)
	http.Handle("/article/random", middleware.Layres(articleGetRandom))
}
