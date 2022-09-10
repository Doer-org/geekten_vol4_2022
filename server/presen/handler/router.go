package handler

import (
	"net/http"

	"github.com/Doer-org/geekten_vol4_2022/presen/middleware"
)

func InitRouter(articleHandler ArticleHandler, userHandler UserHandler) {
	// health
	http.Handle("/api", middleware.Layres(http.HandlerFunc(health)))

	// article
	articleGetRandom := http.HandlerFunc(articleHandler.GetRandom)
	http.Handle("/api/article/random", middleware.Layres(articleGetRandom))

	usercreate := http.HandlerFunc(userHandler.CreateUser)
	http.Handle("/api/user/create", middleware.Layres(usercreate))

	userupdate := http.HandlerFunc(userHandler.UpdateUser)
	http.Handle("/api/user/update", middleware.Layres(userupdate))
}
