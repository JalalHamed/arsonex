import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { TLayouts } from './types';

const Layout: FC<{ id: TLayouts; children: ReactNode }> = ({
  id,
  children,
}) => {
  if (id === 'Landing')
    return (
      <Stack bgcolor='surface-container-lowest' padding='24px'>
        {children}
      </Stack>
    );
  return <>{children}</>;
};

export default Layout;
