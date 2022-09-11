// usercreate := http.HandlerFunc(userHandler.CreateUser)
// 	http.Handle("/api/user/create", middleware.Layres(usercreate))
import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
type CreateUser = (user: UserInfo) => void;
export const CreateUser: CreateUser = (user) => {
  Axios.post('/api/user/create', {
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
