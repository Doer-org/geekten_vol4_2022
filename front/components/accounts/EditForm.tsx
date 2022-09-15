import { FC, useState } from 'react';
import { useUserStore } from '../../store/store';
import { UpdateUser } from '../../services/User/UpdateUser';
export const EditForm: FC = () => {
  const { user } = useUserStore();
  const EditUser = useUserStore((state) => state.editUser);
  const [tmp, setTmp] = useState<string>(user.name);
  const updateUser = () => {
    console.log(user);
    UpdateUser(user)
      .then((res) => {
        EditUser(res.data.id, res.data.name);
        localStorage.removeItem('user');
        localStorage.setItem(
          'user',
          JSON.stringify({ id: res.data.id, name: res.data.name })
        );
        console.log(user.name)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(user.name);
  return (
    <div className="text-center">
      <div>Name</div>
      <div className="py-3">
        <input
          type="text"
          className="border-2 border-black px-1"
          value={user.name}
          onChange={(e) => {
            EditUser(user.id, e.target.value);
          }}
        />

        <p className='text-red-500' hidden = {user.name.length > 0 && user.name.length <= 40}>名前は1文字以上40文字以内で入力してください</p>
      </div>

      <button onClick={updateUser} disabled={user.name.length <= 0 && user.name.length > 40}>変更</button>
    </div>
  );
};
