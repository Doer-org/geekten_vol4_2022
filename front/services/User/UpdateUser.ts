import { AxiosResponse } from 'axios';
import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
type UpdateUser = (user: UserInfo) => Promise<AxiosResponse<UserInfo>>;
export const UpdateUser: UpdateUser = async (user) => {
  const formData = new FormData();
  formData.append('id', user.id);
  formData.append('name', user.name);
  const updatedUser = await Axios.put('/api/user/update', formData);
  console.log('updatedUser/api');
  console.log(updatedUser);
  return updatedUser;
};
