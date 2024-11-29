import { StrictMode } from 'react';

import './index.css';
import Router from './routes/Router.tsx';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
