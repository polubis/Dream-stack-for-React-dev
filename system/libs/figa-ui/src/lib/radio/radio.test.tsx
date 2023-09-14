import { fireEvent, render, screen } from '@testing-library/react';
import { Radio, RadioCase } from '.';
import { ThemeProvider } from '../theme-provider';

describe('Radio can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Radio className="my-class">
          <RadioCase
            className="custom-child"
            label="First"
            name="radios"
            value="First"
            active
            disabled
            reversed
          />
          <RadioCase label="Second" name="radios" value="Second" />
          <RadioCase label="Last" name="radios" value="Last" />
        </Radio>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to pass other properties to wrapper and children', () => {
    const onChildClickSpy = jest.fn();
    const onParentClickSpy = jest.fn();

    render(
      <ThemeProvider>
        <Radio onClick={onParentClickSpy}>
          <RadioCase
            label="First"
            name="radios"
            value="First"
            active
            disabled
            onClick={onChildClickSpy}
            reversed
          />
          <RadioCase label="Second" name="radios" value="Second" />
          <RadioCase label="Last" name="radios" value="Last" />
        </Radio>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/First/));

    expect(onChildClickSpy).toHaveBeenCalledTimes(1);
    expect(onParentClickSpy).toHaveBeenCalledTimes(1);
  });
});
