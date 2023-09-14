import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from './switch';
import { ThemeProvider } from '../theme-provider';

describe('Switch can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Switch className="my-class" active disabled label="Label" reversed />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to use other properties', () => {
    const onClickSpy = jest.fn();
    const onHoverSpy = jest.fn();

    render(
      <ThemeProvider>
        <Switch onClick={onClickSpy} onMouseOver={onHoverSpy} label="Switch" />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Switch/));
    fireEvent.mouseOver(screen.getByText(/Switch/));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(onHoverSpy).toHaveBeenCalledTimes(1);
  });
});
