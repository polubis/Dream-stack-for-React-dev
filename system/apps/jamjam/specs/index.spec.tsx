import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@system/figa-ui';

import Index from '../pages/index';

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
