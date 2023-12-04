import { act, fireEvent, render, screen } from '@testing-library/react';
import { AlertsProvider, useAlert } from './alerts-provider';
import { ThemeProvider } from '../theme-provider';

jest.useFakeTimers();

describe('Alerts works when: ', () => {
  const ComponentFixture = () => {
    const alert = useAlert();

    return (
      <button
        onClick={() =>
          alert.show({
            children: 'Alert content',
            className: 'my-class',
            delay: 4000,
            variant: 'outlined',
            type: 'ok',
          })
        }
      >
        Show
      </button>
    );
  };

  it('[FRAGILE] assigns class names and required properties', () => {
    let acc = 0;
    jest.spyOn(Date.prototype, 'toISOString').mockImplementation(() => {
      const date = `2023-12-04T18:02:0${acc}.848Z`;
      acc++;
      return date;
    });

    const { baseElement } = render(
      <ThemeProvider>
        <AlertsProvider>
          <ComponentFixture />
        </AlertsProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Show/));

    expect(baseElement).toMatchSnapshot();
  });

  it('alerts may be closed manually after close button click', () => {
    let acc = 0;
    jest.spyOn(Date.prototype, 'toISOString').mockImplementation(() => {
      const date = `2023-12-04T18:02:0${acc}.848Z`;
      acc++;
      return date;
    });

    render(
      <ThemeProvider>
        <AlertsProvider>
          <ComponentFixture />
        </AlertsProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Show/));

    expect(screen.queryAllByText(/Alert content/)).toHaveLength(1);

    fireEvent.click(screen.getByLabelText(/Close alert/));

    expect(screen.queryAllByText(/Alert content/)).toHaveLength(0);
  });

  it('[FRAGILE] alerts are closed after timeouts', async () => {
    let acc = 0;
    jest.spyOn(Date.prototype, 'toISOString').mockImplementation(() => {
      const date = `2023-12-04T18:02:0${acc}.848Z`;
      acc++;
      return date;
    });

    render(
      <ThemeProvider>
        <AlertsProvider>
          <ComponentFixture />
        </AlertsProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Show/));

    screen.getByText(/Alert content/);

    fireEvent.click(screen.getByText(/Show/));
    fireEvent.click(screen.getByText(/Show/));

    expect(screen.getAllByText(/Alert content/)).toHaveLength(3);
    expect(screen.getAllByText(/Alert content/)).toMatchSnapshot();

    await act(() => {
      jest.advanceTimersByTime(5500);
    });

    expect(screen.queryAllByText(/Alert content/)).toHaveLength(0);
  });
});
