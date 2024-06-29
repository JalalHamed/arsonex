import { Layout } from 'components/global';
import { FC, useState } from 'react';
import { Drawer, Navbar } from './components';

const Landing: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <Layout id='Landing'>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Navbar setIsDrawerOpen={setIsDrawerOpen} />
    </Layout>
  );
};

export default Landing;
