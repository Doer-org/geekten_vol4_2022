import { FC, useEffect } from 'react';
import { useFetchHistory } from '../../hooks/History/useFetchHistory';
import { useUserStore } from '../../store/store';
import { useHistoryStore } from '../../store/store';
import { History } from './History';
export const Histories: FC = () => {
  const { user } = useUserStore();
  const { history } = useHistoryStore();
  const setHistory = useHistoryStore((state) => state.setHistory);
  useEffect(() => {
    useFetchHistory(user.id)
      .then((res) => {
        setHistory(res);
      })
      .catch(() => {
        console.log('err');
      });
  }, []);

  return (
    <div>
      <div className="">
        <h2 className="text-center text-2xl font-bold">履歴</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 max-h-screen overflow-y-scroll overflow-hidden">
          {history?.map((his, id) => {
            return <History history={his} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};
