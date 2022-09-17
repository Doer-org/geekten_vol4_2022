import React from 'react';
import Link from 'next/link';
import { useArticleOptionStore } from '../../store/store';
export const Buttons = () => {
  const setOption = useArticleOptionStore((state) => state.setOption);

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Link href="/result">
        <button
          className="shadow-md rounded-md border p-3 hover:bg-orange-500"
          onClick={() => setOption('nich')}
        >
          nich
        </button>
      </Link>
      <Link href="/result">
        <button
          className="shadow-md rounded-md border p-3 hover:bg-orange-500"
          onClick={() => setOption('normal')}
        >
          normal
        </button>
      </Link>
      <Link href="/result">
        <button
          className="shadow-md rounded-md border p-3 hover:bg-orange-500"
          onClick={() => setOption('popularity')}
        >
          popular
        </button>
      </Link>
    </div>
  );
};
