import { FC, useEffect, useState } from 'react';
import { useCreateFavorite } from '../../hooks/Favorite/useCreateFavorite';
import { useFetchFavorite } from '../../hooks/Favorite/useFetchFavorite';
import { useDeleteFavorite } from '../../hooks/Favorite/useDeleteFavorite';
import styles from '../../styles/heart.module.css';
export const FavButton: FC<{ user_id: string; article_id: number }> = ({
  user_id,
  article_id,
}) => {
  const [favoritedNum, setFavoritedNum] = useState<number[]>([]);
  const [like, setLike] = useState<boolean>(favoritedNum.includes(article_id));
  useEffect(() => {
    useFetchFavorite(user_id).then((res) => {
      if (typeof res !== 'undefined') {
        const ids = res.map((b) => {
          if (b.article_id === article_id) {
            setLike(true);
          }
          return b.article_id;
        });
        setFavoritedNum(ids);
      }
    });
  }, []);

  useEffect(() => {
    if (favoritedNum.includes(article_id)) {
      setLike(true);
    }
  }, [favoritedNum]);
  return (
    <div>
      <button
        onClick={() => {
          if (favoritedNum.includes(article_id)) {
            setLike(!like);
            useDeleteFavorite(user_id, article_id);
          } else {
            setLike(!like);
            useCreateFavorite(user_id, article_id);
          }
        }}
        className="px-1"
      >
        <div className={like ? styles.clicked : styles.unclick}></div>
      </button>
    </div>
  );
};
