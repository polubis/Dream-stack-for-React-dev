import { render, screen } from '@testing-library/react';
import { Alert } from './alert';
import { ALERT_TYPES, ALERT_VARIANTS } from './consts';
import { ThemeProvider } from '../theme-provider';

describe('Alert can be used when: ', () => {
  it('[FRAGILE] works with default setup', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Alert>My text</Alert>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Alert className="my-class">My text</Alert>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes when fixed and trimmed', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Alert className="my-class" fixed trimmed>
          My text
        </Alert>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns type classes', () => {
    ALERT_TYPES.forEach((type) => {
      const { asFragment } = render(
        <ThemeProvider>
          <Alert type={type}>My text</Alert>
        </ThemeProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('[FRAGILE] assigns variant classes', () => {
    ALERT_VARIANTS.forEach((variant) => {
      const { asFragment } = render(
        <ThemeProvider>
          <Alert variant={variant}>My text</Alert>
        </ThemeProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
