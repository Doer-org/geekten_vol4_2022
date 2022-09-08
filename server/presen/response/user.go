package response

import "github.com/Doer-org/geekten_vol4_2022/domain/entity"

func NewUserResponse(user *entity.User) UserResponse {
	return UserResponse{
		Name: user.Name,
		Id:   user.Id,
	}
}

type UserResponse struct {
	Name string `json:"name"`
	Id   string `json:"id"`
}
