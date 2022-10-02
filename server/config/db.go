package config

import (
	"fmt"
	"log"
	"os"
)

var (
	dbUser = os.Getenv("POSTGRES_USER")
	dbPass = os.Getenv("POSTGRES_PASSWORD")
	dbHost = os.Getenv("DB_HOST")
	dbName = os.Getenv("POSTGRES_DB")
	dbUrl  = os.Getenv("DB_URL")
)

func GetDbUri() string {
	if Env == "dev" {
		return fmt.Sprintf(
			"host=%s user=%s password=%s dbname=%s sslmode=disable",
			dbHost,
			dbUser,
			dbPass,
			dbName,
		)
	} else {
		log.Println("env prd: ", dbUrl)
		return dbUrl
	}
}

// ENV=dev POSTGRES_USER=hoge POSTGRES_PASSWORD=hoge POSTGRES_DB=hoge DB_HOST=localhost go test ./...
