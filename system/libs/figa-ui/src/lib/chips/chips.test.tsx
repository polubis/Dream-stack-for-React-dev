import { fireEvent, render, screen } from '@testing-library/react';
import { Chip, Chips } from '.';
import { ThemeProvider } from '../theme-provider';

describe('Chips can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Chips className="my-class">
          <Chip className="chip1" active>
            Chip1
          </Chip>
          <Chip className="chip2" active>
            Chip2
          </Chip>
        </Chips>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('additional properties may be passed like events or attributes', () => {
    const spy = jest.fn();

    render(
      <ThemeProvider>
        <Chips>
          <Chip onClick={spy}>Chip2</Chip>
        </Chips>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Chip2/));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
