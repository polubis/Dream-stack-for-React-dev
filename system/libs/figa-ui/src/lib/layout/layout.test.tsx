import { fireEvent, render, screen } from '@testing-library/react';

import { Layout } from './layout';

describe('User is able to use layout when', () => {
  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(
      <Layout header={<div>Header</div>} footer={<div>Footer</div>}>
        <div>Content</div>
      </Layout>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] renders big contents', () => {
    const { asFragment } = render(
      <Layout header={<div>Header</div>} footer={<div>Footer</div>}>
        <div style={{ height: '110vh' }}>Content</div>
      </Layout>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders passed components', () => {
    render(
      <Layout header={<div>Header</div>} footer={<div>Footer</div>}>
        <div style={{ height: '110vh' }}>Content</div>
      </Layout>
    );

    screen.getByText(/Header/);
    screen.getByText(/Content/);
    screen.getByText(/Footer/);
  });

  it('[FRAGILE] allows to disable content padding', () => {
    const { asFragment } = render(
      <Layout header={<div>Header</div>} offPadding>
        <div>Content</div>
      </Layout>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to skip footer', () => {
    const { asFragment } = render(
      <Layout header={<div>Header</div>}>
        <div>Content</div>
      </Layout>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to pass sidebar and gives option to maintain it', () => {
    const { asFragment } = render(
      <Layout
        header={<div>Header</div>}
        sidebar={(toggler) => (
          <div onClick={toggler.toggle}>
            Sidebar: {toggler.opened ? 'opened' : 'closed'}
          </div>
        )}
      >
        <div>Content</div>
      </Layout>
    );

    fireEvent.click(screen.getByText(/opened/));

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(/closed/));

    expect(asFragment()).toMatchSnapshot();
  });
});
