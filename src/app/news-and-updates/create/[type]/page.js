import React from 'react';
import CreateNewsPage from '../../../../components/CreateNewsPage';

// `params` is now a Promise and requires `use()` to unwrap it
const CreateTypePage = async ({ params }) => {
  const { type } = (await params)

  return <CreateNewsPage type={type} />;
};

export default CreateTypePage;