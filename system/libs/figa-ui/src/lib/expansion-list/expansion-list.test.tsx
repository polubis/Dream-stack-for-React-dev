import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { ExpansionList } from './expansion-list';
import { ThemeProvider } from '../theme-provider';

describe('Expansion list can be used when: ', () => {
  const Fixture = () => {
    const [selection, { toggle }] = ExpansionList.use({ 0: true });

    return (
      <ThemeProvider>
        <ExpansionList className="my-class-container">
          <ExpansionList.Item className="my-class-item">
            <ExpansionList.Header>
              <span>This is header 1</span>
              <button onClick={() => toggle(0)}>
                {selection[0] ? 'C0' : 'O0'}
              </button>
            </ExpansionList.Header>
            <ExpansionList.Content opened={selection[0]}>
              Content
            </ExpansionList.Content>
          </ExpansionList.Item>
          <ExpansionList.Item>
            <ExpansionList.Header>
              <span>This is header 2</span>
              <button onClick={() => toggle(1)}>
                {selection[1] ? 'C1' : 'O1'}
              </button>
            </ExpansionList.Header>
            <ExpansionList.Content opened={selection[1]}>
              Content
            </ExpansionList.Content>
          </ExpansionList.Item>
        </ExpansionList>
      </ThemeProvider>
    );
  };

  it('[FRAGILE] allows to toggle items', () => {
    const { asFragment } = render(<Fixture />);

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(/C0/));
    fireEvent.click(screen.getByText(/O1/));

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(/O0/));
    fireEvent.click(screen.getByText(/C1/));

    expect(asFragment()).toMatchSnapshot();
  });

  it('items can be opened/closed/replaced with provided mechanism', () => {
    const { result } = renderHook(() => ExpansionList.use({ 1: true }));

    expect(result.current[0]).toEqual({ 1: true });

    const { toggle } = result.current[1];

    act(() => {
      toggle(1);
    });

    expect(result.current[0]).toEqual({ 1: false });

    const { replace } = result.current[1];

    act(() => {
      replace({});
    });

    expect(result.current[0]).toEqual({});

    const { open } = result.current[1];

    act(() => {
      open(1);
    });

    expect(result.current[0]).toEqual({ 1: true });

    const { close } = result.current[1];

    act(() => {
      close(1);
    });

    expect(result.current[0]).toEqual({ 1: false });
  });
});
