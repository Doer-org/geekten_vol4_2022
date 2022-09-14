// usernameの変更をここで実行する
// 忘れてしまいそうな疑問点としてuserの状態を何で保存するか
// 選択肢としてはキャッシュ、セッション、クッキー、useEffectで常に取ってくる
import { AxiosResponse } from 'axios';
import { UpdateUser } from '../services/User/UpdateUser';
import { UserInfo } from '../types/userInfo';
type EditUser = (user: UserInfo) => Promise<AxiosResponse<UserInfo>>;
export const useEditUser: EditUser = async (user) => {
  const updatedUser = await UpdateUser(user);
  return updatedUser;
};
