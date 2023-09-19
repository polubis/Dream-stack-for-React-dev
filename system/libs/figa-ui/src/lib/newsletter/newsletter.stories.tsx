import type { Meta, Story } from '@storybook/react';

import Newsletter from './newsletter';

export default {
  component: Newsletter,
  title: 'Newsletter',
} as Meta;

const Template: Story = () => {
  return (
    <Newsletter
      title={'GET 10% OFF'}
      src={
        'https://plus.unsplash.com/premium_photo-1694383414357-6e5cb02b873a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80'
      }
      description={'Subscribe now and get a promotion for your first order.'}
      maxWidth="750px"
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
