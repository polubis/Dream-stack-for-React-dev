import type { Story, Meta } from '@storybook/react';

import { Select } from './select';
import { useState } from 'react';

export default {
  component: Select,
  title: 'Select',
} as Meta;

const Template: Story = () => {
  const [value, setValue] = useState('');

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

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'wrap',
        gap: '20px',
      }}
    >
      <Select
        options={options}
        value={value}
        placeholder="My custom placeholder"
        onChange={setValue}
      />
      <div>
        <Select
          options={options}
          initialOpen
          value={value}
          onChange={setValue}
        />
      </div>
      <div>
        <Select options={options} value={value} onChange={setValue} />
      </div>
      <div>
        <Select options={options} value={options[0].key} onChange={setValue} />
      </div>
      <div>
        <Select
          options={options}
          initialOpen
          value={options[0].key}
          onChange={setValue}
        />
      </div>
      <Select
        options={options}
        value={value}
        placeholder="My custom placeholder"
        onChange={setValue}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
