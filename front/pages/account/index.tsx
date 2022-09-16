import type { NextPage } from 'next';
import { EditForm } from '../../components/accounts/EditForm';
import { Layout } from '@/components/layouts/Layout';
import { Histories } from '../../components/accounts/Histories';

const Edit: NextPage = () => {
  return (
    <Layout>
      <EditForm />
      <Histories />
    </Layout>
  );
};

export default Edit;
