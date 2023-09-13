import { fireEvent, render, screen } from '@testing-library/react';
import { Tabs, Tab } from '.';
import { ThemeProvider } from '../theme-provider';

describe('Tabs can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Tabs className="my-tabs-class">
          <Tab className="my-tab-class" active>
            1
          </Tab>
          <Tab active disabled>
            2
          </Tab>
          <Tab disabled>3</Tab>
          <Tab>4</Tab>
        </Tabs>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('there is an option to pass additional properties', () => {
    const onParentClickSpy = jest.fn();
    const onChildClickSpy = jest.fn();

    render(
      <ThemeProvider>
        <Tabs onClick={onParentClickSpy}>
          <Tab onClick={onChildClickSpy} active>
            1
          </Tab>
        </Tabs>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/1/));

    expect(onParentClickSpy).toHaveBeenCalledTimes(1);
    expect(onChildClickSpy).toHaveBeenCalledTimes(1);
  });
});
