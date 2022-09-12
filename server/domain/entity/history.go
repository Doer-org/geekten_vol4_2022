package entity

import "time"

type History struct {
	UserId    string
	ArticleId int
	CreatedAt time.Time
}
