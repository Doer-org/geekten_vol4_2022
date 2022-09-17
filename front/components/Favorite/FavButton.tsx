import { FC, useEffect, useState } from 'react';
import { useCreateFavorite } from '../../hooks/Favorite/useCreateFavorite';
import { useFetchFavorite } from '../../hooks/Favorite/useFetchFavorite';
import { useDeleteFavorite } from '../../hooks/Favorite/useDeleteFavorite';
export const FavButton: FC<{ user_id: string; article_id: number }> = ({
  user_id,
  article_id,
}) => {
  const [favoritedNum, setFavoritedNum] = useState<number[]>([]);

  useEffect(() => {
    useFetchFavorite(user_id).then((res) => {
      const ids = res.map((b) => {
        return b.article_id;
      });
      setFavoritedNum(ids);
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          favoritedNum.includes(article_id)
            ? useDeleteFavorite(user_id, article_id)
            : useCreateFavorite(user_id, article_id);
        }}
      >
        {favoritedNum.includes(article_id) ? (
          <div>いいね済み</div>
        ) : (
          <div>いいねできるよ</div>
        )}
      </button>
    </div>
  );
};