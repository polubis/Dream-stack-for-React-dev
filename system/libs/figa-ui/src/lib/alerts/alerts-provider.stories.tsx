import type { Story, Meta } from '@storybook/react';

import { AlertsProvider, useAlert } from './alerts-provider';
import { useEffect, useState } from 'react';
import { ALERT_POSITIONS } from './consts';
import { Box } from '../box';
import { Button } from '../button';

export default {
  component: AlertsProvider,
  title: 'AlertsProvider',
} as Meta;

const Content = () => {
  const [counter, setCounter] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    ALERT_POSITIONS.forEach((position) => {
      alert.show({
        variant: 'filled',
        children: 'Something went wrong',
        position,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <Box
      style={{ minHeight: '100vh', marginLeft: '400px', marginTop: '20px' }}
    >
      <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Open
      </Button>
    </Box>
  );
};

const Template: Story = () => {
  return (
    <AlertsProvider>
      <Content />
    </AlertsProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
