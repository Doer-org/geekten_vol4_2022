import type { NextPage } from 'next';
import { EditForm } from '../../components/accounts/EditForm';
import { Layout } from '@/components/layouts/Layout';

const Edit: NextPage = () => {
  return (
    <Layout>
      <EditForm />
    </Layout>
  );
};

export default Edit;
