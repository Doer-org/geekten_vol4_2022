import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
type CreateUser = (user: UserInfo) => void;
export const CreateUser: CreateUser = (user) => {
  const formData = new FormData();
  formData.append('id', user.id);
  formData.append('name', user.name);
  Axios.post('/api/user/create', formData)
    .then((res) => {})
    .catch((err) => {});
};
