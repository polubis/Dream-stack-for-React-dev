import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { ThemeProvider } from '@system/figa-ui';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Index />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
