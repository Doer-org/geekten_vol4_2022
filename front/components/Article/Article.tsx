export const Article = () => {
  return (
    <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5">
      <div className=" bg-lime-300 rounded-md py-10 px-5 break-all">
        <h3 className="text-lg lg:text-xl font-medium">
          計算量オーダーの求め方を総整理！ 〜 どこから log が出て来るか 〜
        </h3>
      </div>
      <p className="m-3 text-left">
        世の中の様々なシステムやソフトウェアはアルゴリズムによって支えられています。Qiita
        Contribution
        ランキング作成のために用いるソートアルゴリズムのような単純なものから.....
      </p>
      <div className="flex max-w-fit overflow-x-scroll">
        <p className="p-1 shadow-md border rounded-md my-4 mx-3">atcoder</p>
        <p className="p-1 shadow-md border rounded-md my-4 mx-3">C++</p>
        <p className="p-1 shadow-md border rounded-md my-4 mx-3">python</p>
        <p className="p-1 shadow-md border rounded-md my-4 mx-3">Ruby</p>
      </div>
    </article>
  );
};
