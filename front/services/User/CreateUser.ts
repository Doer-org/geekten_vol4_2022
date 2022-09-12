// usercreate := http.HandlerFunc(userHandler.CreateUser)
// 	http.Handle("/api/user/create", middleware.Layres(usercreate))
import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
type CreateUser = (user: UserInfo) => void;
export const CreateUser: CreateUser = (user) => {
  const formData = new FormData();
  formData.append('id', user.id);
  formData.append('name', user.name);
  Axios.post('/api/user/create', formData)
    .then((res) => {
      console.log('seikou!!!');
      console.log(res);
    })
    .catch((err) => {
      console.log('sippai!!');
      console.log(err);
    });
};
