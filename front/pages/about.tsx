import type { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
// import Image from "next/image";
// import mao from 'https://github.com/meow520.png'

const About: NextPage = () => {
  const users = ["mahiro72", "seipan", "nisi0929", "kai-0307", "meow520"];

  return (
    <Layout>
      <div>
        <h2 className="mb-20 text-center text-2xl font-bold">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {users.map((name) => {
            return (
              <div className="w-96 h-32 flex justify-center items-center">
            <p>{name}</p>
            </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
