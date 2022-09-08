package main

import (
	"log"
	"net/http"

	"github.com/Doer-org/geekten_vol4_2022/infra/db"
	"github.com/Doer-org/geekten_vol4_2022/infra/repository"
	"github.com/Doer-org/geekten_vol4_2022/presen/handler"
	"github.com/Doer-org/geekten_vol4_2022/usecase"
	"github.com/Doer-org/geekten_vol4_2022/utils"
)

func main() {
	db := db.NewDriver()
	defer db.Close()

	articleRepository := repository.NewArticleRepository(db)
	articleUsecase := usecase.NewArticleUsecase(articleRepository)
	articleHandler := handler.NewArticlehandler(articleUsecase)

	userRepository := repository.NewUserRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepository)
	userHandler := handler.NewUserhandler(userUsecase)

	handler.InitRouter(articleHandler, userHandler)

	port := utils.GetDefaultEnv("PORT", "8080")
	srv := &http.Server{
		Addr: ":" + port,
	}

	if err := srv.ListenAndServe(); err != http.ErrServerClosed {
		log.Fatalln("Server closed with error :", err)
	}
}
