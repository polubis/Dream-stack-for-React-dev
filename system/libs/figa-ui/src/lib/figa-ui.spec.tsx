import { render } from '@testing-library/react';

import FigaUi from './figa-ui';

describe('FigaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FigaUi />);
    expect(baseElement).toBeTruthy();
  });
});
