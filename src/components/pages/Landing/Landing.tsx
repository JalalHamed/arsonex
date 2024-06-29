import { Stack } from '@mui/material';
import { Layout } from 'components/global';
import { FC, useState } from 'react';
import { Drawer, Hero, Navbar, SpotRate } from './components';

const Landing: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <Layout id='Landing'>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Navbar setIsDrawerOpen={setIsDrawerOpen} />
      <Stack
        p={{ sm: '24px' }}
        gap='200px'
        mx='auto'
        maxWidth='1440px'
        width='100%'
      >
        <Hero />
        <SpotRate />
      </Stack>
    </Layout>
  );
};

export default Landing;
