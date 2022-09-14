import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
import { AxiosResponse } from 'axios';
type Error = {
  Status: number;
  Result: string;
};
interface FetchUser<T> {
  (user: string): Promise<UserInfo>;
}
export const FetchUser: FetchUser<UserInfo | Error> = async (id) => {
  const res = await Axios.get(`/api/user/get?id=${id}`);
  return res.data;
};
