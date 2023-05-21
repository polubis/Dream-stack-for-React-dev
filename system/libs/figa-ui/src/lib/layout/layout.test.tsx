import { render, screen } from '@testing-library/react';

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
});
