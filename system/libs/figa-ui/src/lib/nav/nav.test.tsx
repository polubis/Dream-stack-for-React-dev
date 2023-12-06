import { render } from '@testing-library/react';
import { Nav } from './nav';
import { ThemeProvider } from '../theme-provider';
import { usePortal, useToggle } from '@system/figa-hooks';
import type { ReactNode } from 'react';

jest.mock('@system/figa-hooks');

describe('Nav can be used when: ', () => {
  beforeAll(() => {
    (usePortal as jest.Mock).mockImplementation(() => ({
      render: (children: ReactNode) => children,
    }));
    (useToggle as jest.Mock).mockImplementation(
      jest.requireActual('@system/figa-hooks')['useToggle']
    );
  });

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Nav
          className="my-nav"
          logo={<span>Logo</span>}
          actions={
            <>
              <button>Register</button>
              <button>Sign In</button>
            </>
          }
        >
          <a href="/test">Articles</a>
          <a href="/">Authors</a>
          <a href="/">Admin</a>
        </Nav>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
