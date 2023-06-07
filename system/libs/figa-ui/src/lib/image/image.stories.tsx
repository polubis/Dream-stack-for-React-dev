import type { Story, Meta } from '@storybook/react';

import { Image } from './image';
import { Box } from '../box';

export default {
    component: Image,
    title: 'Image',
} as Meta;

const Template: Story = () => {
    return (
        <Box orientation='row'>
            <Image>
                <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg" />
            </Image>
            <Image caption='My custom caption'>
                <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg" />
            </Image>
        </Box>
    );
};

export const Default = Template.bind({});
Default.args = {};
