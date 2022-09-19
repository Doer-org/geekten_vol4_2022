import { Axios } from '../../libs/api';
import { UserInfo } from '../../types/userInfo';
interface FetchUser {
  (user: string): Promise<UserInfo | undefined>;
}
export const FetchUser: FetchUser = async (id) => {
  try {
    const { data } = await Axios.get(`/api/user/get?id=${id}`);
    if (typeof data.Result !== 'undefined') {
      throw new Error('favorite error');
    } else {
      const user: UserInfo = data;
      return user;
    }
  } catch (error) {
    return undefined;
  }
};
