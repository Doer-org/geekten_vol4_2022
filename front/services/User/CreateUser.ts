// usercreate := http.HandlerFunc(userHandler.CreateUser)
// 	http.Handle("/api/user/create", middleware.Layres(usercreate))
import axios from 'axios';
import { UserInfo } from '../../types/userInfo';
type CreateUser = (user: UserInfo) => void;
export const CreateUser: CreateUser = (user) => {
  axios
    .post('http://localhost:8000/api/user/create', {
      id: user.id,
      name: user.name,
    })
    .then((res) => {
      console.log('seikou!!!');
      console.log(res);
    })
    .catch((err) => {
      console.log('sippai!!');
      console.log(err);
    });
};
