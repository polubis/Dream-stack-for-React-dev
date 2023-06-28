import type { Story, Meta } from '@storybook/react';

import { Alert } from './alert';
import { Box } from '../box';
import { Font } from '../font';
import { ALERT_TYPES, ALERT_VARIANTS } from './consts';
import type { AlertProps } from './defs';

export default {
  component: Alert,
  title: 'Alert',
} as Meta;

const StaticTemplate: Story = () => {
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

      <Box spacing={[200, 200]}>
        <Font variant="h4">Trimmed</Font>

        {ALERT_VARIANTS.map((variant) => (
          <Box key={variant} spacing={ALERT_VARIANTS.map(() => 250)}>
            <Font variant="h5">Variant {variant}</Font>
            <Box orientation="row" spacing={ALERT_TYPES.map(() => 150)}>
              {ALERT_TYPES.map((type) => (
                <Alert
                  trimmed
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
      </Box>
    </Box>
  );
};

const FixedTemplate: Story<Pick<AlertProps, 'maxWidth' | 'trimmed'>> = (
  props
) => {
  return (
    <>
      {ALERT_TYPES.map((type, typeIdx) => (
        <Alert
          key={type}
          type={type}
          fixed
          variant="filled"
          style={{
            top: typeIdx * 50 + 40 + 'px',
          }}
          {...props}
        >
          This is filled variant with type [{type}].
        </Alert>
      ))}
      {ALERT_TYPES.map((type, typeIdx) => (
        <Alert
          key={type}
          type={type}
          fixed
          variant="outlined"
          style={{
            top: typeIdx * 50 + 300 + 'px',
          }}
          {...props}
        >
          This is outlined variant with type [{type}].
        </Alert>
      ))}
    </>
  );
};

export const Static = StaticTemplate.bind({});
Static.args = {};

export const Fixed = FixedTemplate.bind({});
Fixed.args = {};

export const FixedAndTrimmed = FixedTemplate.bind({});
FixedAndTrimmed.args = {
  maxWidth: '300px',
  trimmed: true,
};
