import type { NextPage } from 'next';
import Form from '../../components/Form';
import { Layout } from '@/components/layouts/Layout';

const Login: NextPage = () => {
  return (
    <Layout>
      <Form title="Login" />
    </Layout>
  );
};

export default Login;
