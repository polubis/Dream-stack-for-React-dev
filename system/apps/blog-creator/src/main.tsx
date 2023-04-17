import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/app';
import { Sandbox, ThemeProvider } from '@system/figa-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Sandbox>
          <App />
        </Sandbox>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
