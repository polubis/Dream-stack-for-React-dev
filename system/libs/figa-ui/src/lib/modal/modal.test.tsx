import { render } from '@testing-library/react';
import { Modal } from './modal';
import { type ReactNode } from 'react';

import { usePortal } from '@system/figa-hooks';

jest.mock('@system/figa-hooks');

describe('Modal can be used when: ', () => {
  beforeAll(() => {
    (usePortal as jest.Mock).mockImplementation(() => ({
      render: (children: ReactNode) => children,
    }));
  });

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(<Modal className="my-class" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
