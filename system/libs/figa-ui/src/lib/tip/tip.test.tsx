import { render } from '@testing-library/react';
import { Tip } from './tip';
import { ThemeProvider } from '../theme-provider';

describe('Tip can be used when: ', () => {
  it('[FRAGILE] works by default', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Tip content="My tip here">
          <div>Content</div>
        </Tip>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes and orientation', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Tip
          className="my-class"
          orientation="right"
          offset={150}
          content="My tip here"
        >
          <div>Content</div>
        </Tip>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
