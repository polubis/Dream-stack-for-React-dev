import type { Meta, Story } from '@storybook/react';

import Breadcrumbs from './breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
} as Meta;

const Template: Story = () => {
  const breadcrumbItems = ['Home', 'Category', 'Subcategory', 'Page'];
  return <Breadcrumbs items={breadcrumbItems} />;
};

export const Default = Template.bind({});
Default.args = {};
