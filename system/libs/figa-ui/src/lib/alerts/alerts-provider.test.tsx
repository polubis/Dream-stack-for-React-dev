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

  it('alerts may be opened/closed and are closed after timeouts', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn());

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

    errorSpy.mockRestore();
  });
});
