import type { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { useStore } from "../store/store";



const Count = () => {
  const count = useStore((state) => state.count);
  return <h2>count: {count}</h2>;
};

const IncreaseCount = () => {
  const increaseCount = useStore((state) => state.increaseCount);
  return <button onClick={() => increaseCount()}>Increase</button>;
};

const ResetButton = () => {
  const { resetCount } = useStore();
  return <button onClick={() => resetCount()}>Reset</button>;
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Count />
      <IncreaseCount />
      <ResetButton />
    </Layout>
  );
};

export default Home;
