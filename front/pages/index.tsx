import type { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import Lottie from "lottie-react";
import * as animationData from "../json/robot.json";
import Link from "next/link";
import { useArticleOptionStore } from "../store/store";
import { useNoticeStore } from "../store/store";

const Home: NextPage = () => {
  const { option } = useArticleOptionStore();
  const { notice } = useNoticeStore();
  const setOption = useArticleOptionStore((state) => state.setOption);

  return (
    <Layout>
      <div className="h-10 w-full">
        <div className="h-full mr-5 flex justify-center" hidden={notice === ""}>
          <p className="text-center text-lg my-auto bg-amber-500 font-bold px-10 py-3 rounded-md" hidden={notice === ""}>
            {notice}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center justify-items-center">
        <div className="w-1/2">
          <Lottie animationData={animationData} />
          <p className="text-center text-gray-400">by Mikhail Voloshin</p>
        </div>
        <div className="shadow-2xl rounded-md border text-center flex justify-center items-center p-20">
          <div>
            <h2 className="my-5">
              DITAはあなたの技術の発見をサポートするサービスです
            </h2>
            <Link href="/result">
              <button
                className="shadow-md rounded-md border p-3 hover:bg-orange-500"
                onClick={() => setOption("nich")}
              >
                nich
              </button>
            </Link>
            <Link href="/result">
              <a className="shadow-md rounded-md border p-3 hover:bg-orange-500 mx-3">
                Random
              </a>
            </Link>
            <Link href="/result">
              <button
                className="shadow-md rounded-md border p-3 hover:bg-orange-500"
                onClick={() => setOption("popularity")}
              >
                popular
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
