package entity

import "time"

type Article struct {
	Id     int
	Title  string
	Likes  int
	Url    string
	Author string
	Kind   string
}

type History struct {
	UserId    string
	ArticleId int
	CreatedAt time.Time
}
