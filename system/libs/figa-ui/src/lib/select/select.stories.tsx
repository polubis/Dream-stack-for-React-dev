import type { Story, Meta } from '@storybook/react';

import { Select } from './select';
import { useState } from 'react';
import { Box } from '../box';

export default {
  component: Select,
  title: 'Select',
} as Meta;

const options = [
  {
    key: '0',
    child: <div>1 child</div>,
  },
  {
    key: '1',
    child: <div>2 child</div>,
  },
  {
    key: '2',
    child: <div>3 child</div>,
  },
  {
    key: '3',
    child: <div>4 child</div>,
  },
];

const Template: Story = () => {
  const [value, setValue] = useState('');

  return (
    <Box padding={[300, 300, 300, 300]} spacing={[200, 200, 2000]}>
      <Select
        options={options}
        value={value}
        placeholder="My custom placeholder"
        onChange={setValue}
      />
      <Box orientation="row" spacing={[200, 200, 200]}>
        <Select
          options={options}
          initialOpen
          value={value}
          onChange={setValue}
        />
        <Select options={options} value={value} onChange={setValue} />
        <Select options={options} value={value} onChange={setValue} />
        <Select options={options} value={options[0].key} onChange={setValue} />
      </Box>
      <Box orientation="row" spacing={[200]}>
        <Select options={options} value={options[0].key} onChange={setValue} />
        <Select
          options={options}
          value={value}
          initialOpen
          placeholder="My custom placeholder"
          onChange={setValue}
        />
      </Box>
      <Select
        options={options}
        value={value}
        initialOpen
        placeholder="My custom placeholder"
        onChange={setValue}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
