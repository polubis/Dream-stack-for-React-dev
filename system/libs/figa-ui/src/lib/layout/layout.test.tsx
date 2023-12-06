import { fireEvent, render, screen } from '@testing-library/react';

import { Layout } from './layout';
import { ThemeProvider } from '../theme-provider';

describe('User is able to use layout when', () => {
  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Layout
          topNav={<div>Header</div>}
          bottomNav={<div>Bottom nav item</div>}
          footer={<div>Footer</div>}
        >
          <div>Content</div>
        </Layout>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] renders big contents', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Layout
          bottomNav={null}
          topNav={<div>Header</div>}
          footer={<div>Footer</div>}
        >
          <div style={{ height: '110vh' }}>Content</div>
        </Layout>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders passed components', () => {
    render(
      <ThemeProvider>
        <Layout
          topNav={<div>Header</div>}
          bottomNav={null}
          footer={<div>Footer</div>}
        >
          <div style={{ height: '110vh' }}>Content</div>
        </Layout>
      </ThemeProvider>
    );

    screen.getByText(/Header/);
    screen.getByText(/Content/);
    screen.getByText(/Footer/);
  });

  it('[FRAGILE] allows to disable content padding', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Layout topNav={<div>Header</div>} bottomNav={null} offPadding>
          <div>Content</div>
        </Layout>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to skip footer', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Layout topNav={<div>Header</div>} bottomNav={null}>
          <div>Content</div>
        </Layout>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to pass sidebar and gives option to maintain it', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Layout
          topNav={<div>Header</div>}
          bottomNav={null}
          sidebar={(toggler) => (
            <div onClick={toggler.toggle}>
              Sidebar: {toggler.opened ? 'opened' : 'closed'}
            </div>
          )}
        >
          <div>Content</div>
        </Layout>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/opened/));

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(/closed/));

    expect(asFragment()).toMatchSnapshot();
  });
});
