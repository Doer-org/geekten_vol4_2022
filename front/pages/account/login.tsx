import { FC } from "react";
import Link from "next/link";
import Form from "@/components/form";
import { Layout } from "@/components/layouts/Layout";

const Login: FC = () => {
  return (
    <Layout>
      <Form title="Login" />
      <div className="flex justify-center">
        <div className="my-6 border rounded-md text-center text-2xl px-4 py-3">
          <Link href="/account/signup" className="">
            Sign Up
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
