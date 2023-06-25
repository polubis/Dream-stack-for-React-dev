import type { Story, Meta } from '@storybook/react';

import { Avatar } from './avatar';
import { Box } from '../box';
import { AVATAR_SHAPES, AVATAR_SIZES } from './consts';
import { Fragment } from 'react';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta;

const Template: Story = () => {
  return (
    <Box orientation="row" spacing={AVATAR_SIZES.map(() => 150)}>
      {AVATAR_SIZES.map((size) => (
        <Fragment key={size}>
          {AVATAR_SHAPES.map((shape) => (
            <Box key={shape}>
              <Avatar
                size={size}
                shape={shape}
                alt="My alt text"
                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
              />
              <Avatar
                size={size}
                shape={shape}
                alt="My alt text"
                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
                // eslint-disable-next-line jsx-a11y/alt-text
                renderImage={(props) => <img {...props} />}
              />
            </Box>
          ))}
        </Fragment>
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
