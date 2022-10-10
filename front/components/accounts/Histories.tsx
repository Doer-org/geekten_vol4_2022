import { FC, useEffect } from 'react';
import { useFetchHistory } from '../../hooks/History/useFetchHistory';
import { useHistoryStore } from '../../store/store';
import { History } from './History';
export const Histories: FC = () => {
  const { history } = useHistoryStore();
  const setHistory = useHistoryStore((state) => state.setHistory);
  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem('user') as string).id;
    useFetchHistory(user_id).then(async (res) => {
      if (typeof res !== 'undefined') {
        setHistory([...res]);
      }
    });
  }, []);

  return (
    <div>
      <div className=" text-center my-10">
        <h2 className="text-center text-2xl font-bold my-5">履歴</h2>
        <div className="">
          {history !== null ? (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5">
              {history.map((his, id) => {
                return <History history={his} key={id} />;
              })}
            </div>
          ) : (
            <p>履歴がありません</p>
          )}
        </div>
      </div>
    </div>
  );
};
