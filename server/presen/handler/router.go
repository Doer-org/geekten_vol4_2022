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

	articleRanking := http.HandlerFunc(articleHandler.GetRanking)
	http.Handle("/api/article/ranking", middleware.Layres(articleRanking))

	userCreate := http.HandlerFunc(userHandler.CreateUser)
	http.Handle("/api/user/create", middleware.Layres(userCreate))

	userUpdate := http.HandlerFunc(userHandler.UpdateUser)
	http.Handle("/api/user/update", middleware.Layres(userUpdate))

	userGet := http.HandlerFunc(userHandler.GetUser)
	http.Handle("/api/user/get", middleware.Layres(userGet))

	historyCreate := http.HandlerFunc(articleHandler.CreateHistory)
	http.Handle("/api/history/create", middleware.Layres(historyCreate))

	historyGet := http.HandlerFunc(articleHandler.GetHistory)
	http.Handle("/api/history/get", middleware.Layres(historyGet))

	favoriteCreate := http.HandlerFunc(userHandler.CreateFavorite)
	http.Handle("/api/favorite/create", middleware.Layres(favoriteCreate))

	favoriteDelete := http.HandlerFunc(userHandler.DeleteFavorite)
	http.Handle("/api/favorite/delete", middleware.Layres(favoriteDelete))

}
