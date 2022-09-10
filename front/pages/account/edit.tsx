import { FC } from 'react';
import { Layout } from '@/components/layouts/Layout';
import { useUserStore } from '../../store/store';
const Edit: FC = () => {
  const { user } = useUserStore();
  const EditUser = useUserStore((state) => state.editUser);
  console.log(user.name);
  return (
    <Layout>
      <div>Name</div>
      <input
        type="text"
        className="border"
        value={user.name}
        onChange={(e) => {
          EditUser(user.id, e.target.value);
        }}
      />
      <button onClick={() => EditUser(user.id, user.name)}>変更</button>
    </Layout>
  );
};

export default Edit;
