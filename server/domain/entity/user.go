package entity

type User struct {
	Id   string
	Name string
}

type Favorite struct {
	UserId    string
	ArticleId int
}
