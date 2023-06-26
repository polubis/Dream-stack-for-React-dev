import type { Story, Meta } from '@storybook/react';

import { Avatars } from './avatars';
import { Avatar } from '../avatar/avatar';
import { Box } from '../box';
import { AVATAR_SHAPES, AVATAR_SIZES } from '../avatar/consts';
import { Font } from '../font';

export default {
  component: Avatars,
  title: 'Avatars',
} as Meta;

const AvatarDummy = (
  <Avatar
    alt="My alt text"
    src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
  />
);

const Template: Story = () => {
  return (
    <Box spacing={[300, 300, 300]} padding={[300, 300, 300, 300]}>
      <Box spacing={[300, 150, 150, 150]}>
        <Font variant="h5">Shapes to use</Font>
        {AVATAR_SHAPES.map((shape) => (
          <Avatars key={shape} shape={shape} to={3}>
            {AvatarDummy}
            {AvatarDummy}
            {AvatarDummy}
            {AvatarDummy}
          </Avatars>
        ))}
      </Box>
      <Box spacing={[300, 150, 150, 150]}>
        <Font variant="h5">Sizes to use</Font>
        {AVATAR_SIZES.map((size) => (
          <Avatars key={size} size={size} to={3}>
            {AvatarDummy}
            {AvatarDummy}
            {AvatarDummy}
            {AvatarDummy}
          </Avatars>
        ))}
      </Box>
      <Box spacing={[300, 150, 150, 150]}>
        <Font variant="h5">Edge cases</Font>
        <Avatars to={3}>
          {AvatarDummy}
          {AvatarDummy}
        </Avatars>
        <Avatars to={1}>
          {AvatarDummy}
          {AvatarDummy}
        </Avatars>
        <Avatars to={1}>{AvatarDummy}</Avatars>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
