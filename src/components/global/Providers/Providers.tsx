import { FC, PropsWithChildren } from 'react';
import StyleProvider from './StyleProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <StyleProvider>{children}</StyleProvider>
);

export default Providers;
