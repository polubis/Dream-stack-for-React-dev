import type { Story, Meta } from '@storybook/react';

import { AlertsProvider, useAlert } from './alerts-provider';
import { Button } from '../button';
import { Box } from '../box';

export default {
  component: AlertsProvider,
  title: 'AlertsProvider',
} as Meta;

const Content = () => {
  const alert = useAlert();

  return (
    <Box padding={[300, 300, 300, 300]} style={{ minHeight: '100vh' }} center>
      <Box margin="auto">
        <Button
          onClick={() =>
            alert.show({
              variant: 'filled',
              children: 'Something went wrong',
            })
          }
        >
          Open
        </Button>
      </Box>
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
