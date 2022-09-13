import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
import { AxiosResponse } from 'axios';
interface FetchUser {
  (user: string): Promise<AxiosResponse<UserInfo>>;
}
export const FetchUser: FetchUser = (id) => {
  const userData = Axios.get(`/api/user/get?id=${id}`);
  return userData;
};
