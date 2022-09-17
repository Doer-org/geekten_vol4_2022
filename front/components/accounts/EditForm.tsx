import { FC, useState } from 'react';
import { useUserStore } from '../../store/store';
import { UpdateUser } from '../../services/User/UpdateUser';
export const EditForm: FC = () => {
  const { user } = useUserStore();
  const EditUser = useUserStore((state) => state.editUser);
  const [tmp, setTmp] = useState<string>(user.name);
  const updateUser = () => {
    UpdateUser(user)
      .then((res) => {
        EditUser(res.data.id, res.data.name);
        localStorage.removeItem('user');
        localStorage.setItem(
          'user',
          JSON.stringify({ id: res.data.id, name: res.data.name })
        );
      })
      .catch((err) => {});
  };
  return (
    <div className="text-center">
      <h2 className="text-center text-2xl font-bold">アカウント編集</h2>
      <div className="flex justify-center items-center">
        <p>名前</p>
        <div className="p-3">
          <input
            type="text"
            className="border-2 border-black px-1"
            value={user.name}
            onChange={(e) => {
              EditUser(user.id, e.target.value);
            }}
          />
        </div>

        <button
          onClick={updateUser}
          disabled={user.name.length <= 0 && user.name.length > 40}
          className="border-2 border-black px-1 hover:bg-amber-500"
        >
          変更
        </button>
      </div>
      <p
        className="text-red-500"
        hidden={user.name.length > 0 && user.name.length <= 40}
      >
        名前は1文字以上40文字以内で入力してください
      </p>
    </div>
  );
};
