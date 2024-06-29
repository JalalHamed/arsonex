import { Providers } from 'components/global';
import { Landing } from 'components/pages';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <Landing />
    </Providers>
  </React.StrictMode>
);
