import { FC, useState } from 'react';
import { Layout } from '@/components/layouts/Layout';
import { useUserStore } from '../../store/store';
import { UpdateUser } from '../../services/User/UpdateUser';
export const EditForm: FC = () => {
  const { user } = useUserStore();
  const EditUser = useUserStore((state) => state.editUser);
  const [tmp, setTmp] = useState(user.name);
  console.log(user.name);
  return (
    <Layout>
      <div className=" text-center">
        <div>Name</div>
        <div className="py-3">
          <input
            type="text"
            className="border-2 border-black px-1"
            value={tmp}
            onChange={(e) => {
              setTmp(e.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            EditUser(user.id, tmp);
            UpdateUser()
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          変更
        </button>
      </div>
    </Layout>
  );
};
