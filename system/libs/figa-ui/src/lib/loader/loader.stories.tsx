import type { Story, Meta } from '@storybook/react';

import { Loader } from './loader'
import { Link } from '../link';

export default {
  component: Loader,
  title: 'Loader'
} as Meta;

const Template: Story = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
        textAlign: 'center'
      }}
    >
      <Link variant='h5'>Hover over individual borders to see additional effect</Link>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          gap: '20px',
          justifyContent: 'space-around',
          textAlign: 'center'
        }}
      >
        <Loader><Link variant='b1'>Default</Link></Loader>
        <Loader variant='1'><Link variant='b1'>Variant 1</Link></Loader>
        <Loader variant='2'><Link variant='b1'>Variant 2</Link></Loader>
        <Loader variant='3'><Link variant='b1'>Variant 3</Link></Loader>
        <Loader variant='4'><Link variant='b1'>Variant 4</Link></Loader>
      </div>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {};