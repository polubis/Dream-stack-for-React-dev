import type { Story, Meta } from '@storybook/react';

import { Alert } from './alert';
import { Box } from '../box';
import { Font } from '../font';
import { ALERT_TYPES, ALERT_VARIANTS } from './consts';

export default {
  component: Alert,
  title: 'Alert',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[300, 300]}>
      <Font variant="h4">Default</Font>

      {ALERT_VARIANTS.map((variant) => (
        <Box key={variant} spacing={ALERT_VARIANTS.map(() => 250)}>
          <Font variant="h5">Variant {variant}</Font>
          <Box orientation="row" spacing={ALERT_TYPES.map(() => 150)}>
            {ALERT_TYPES.map((type) => (
              <Alert key={type} type={type} variant={variant}>
                This is [{variant}] variant with type [{type}].
              </Alert>
            ))}
          </Box>
        </Box>
      ))}

      {ALERT_VARIANTS.map((variant) => (
        <Box key={variant} spacing={ALERT_VARIANTS.map(() => 250)}>
          <Font variant="h5">Variant {variant} closeable</Font>
          <Box orientation="row" spacing={ALERT_TYPES.map(() => 150)}>
            {ALERT_TYPES.map((type) => (
              <Alert
                key={type}
                type={type}
                variant={variant}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onClose={() => {}}
              >
                This is [{variant}] variant with type [{type}].
              </Alert>
            ))}
          </Box>
        </Box>
      ))}

      <Box spacing={[200, 200]}>
        <Font variant="h4">Trimmed</Font>

        {ALERT_VARIANTS.map((variant) => (
          <Box key={variant} spacing={ALERT_VARIANTS.map(() => 250)}>
            <Font variant="h5">Variant {variant}</Font>
            <Box orientation="row" spacing={ALERT_TYPES.map(() => 150)}>
              {ALERT_TYPES.map((type) => (
                <Alert
                  trim
                  key={type}
                  type={type}
                  maxWidth="150px"
                  variant={variant}
                >
                  This is [{variant}] variant with type [{type}].
                </Alert>
              ))}
            </Box>
          </Box>
        ))}

        {ALERT_VARIANTS.map((variant) => (
          <Box key={variant} spacing={ALERT_VARIANTS.map(() => 250)}>
            <Font variant="h5">Variant {variant} closeable</Font>
            <Box orientation="row" spacing={ALERT_TYPES.map(() => 150)}>
              {ALERT_TYPES.map((type) => (
                <Alert
                  trim
                  key={type}
                  type={type}
                  maxWidth="150px"
                  variant={variant}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  onClose={() => {}}
                >
                  This is [{variant}] variant with type [{type}].
                </Alert>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
