import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { App } from './app';
import { ThemeProvider } from '@system/figa-ui';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(getByText(/Headline1/gi)).toBeTruthy();
  });
});
