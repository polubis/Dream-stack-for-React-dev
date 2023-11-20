import type { Story, Meta } from '@storybook/react';

import { ExpandableLink } from './expandable-link';
import { Box } from '../box';

export default {
  component: ExpandableLink,
  title: 'ExpandableLink',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[2000, 2000, 2000, 2000]}>
      <div style={{ display: 'flex' }}>
        <ExpandableLink>
          <ExpandableLink.Name isActive>Inputs</ExpandableLink.Name>
          <ExpandableLink.List>
            <ExpandableLink.Item path="/?path=/story/input--empty-input">
              Empty Input
            </ExpandableLink.Item>
            <ExpandableLink.Item path="/?path=/story/input--filled-input">
              Filled Input
            </ExpandableLink.Item>
          </ExpandableLink.List>
        </ExpandableLink>
        <ExpandableLink>
          <ExpandableLink.Name isActive={false}>Inputs</ExpandableLink.Name>
          <ExpandableLink.List>
            <ExpandableLink.Item path="/?path=/story/input--empty-input">
              Empty Input
            </ExpandableLink.Item>
            <ExpandableLink.Item path="/?path=/story/input--filled-input">
              Filled Input
            </ExpandableLink.Item>
          </ExpandableLink.List>
        </ExpandableLink>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        molestiae provident, reprehenderit molestias rem veritatis deleniti,
        cupiditate quisquam fugit repellendus adipisci explicabo blanditiis?
        Ullam ratione repellat nostrum nulla! Dignissimos ducimus accusamus
        repudiandae similique. Fugiat maxime non aspernatur inventore,
        assumenda, modi unde rerum dolore cupiditate nobis dicta rem fuga
        molestiae recusandae fugit. Eligendi repellendus adipisci recusandae
        laudantium, consequatur dolorem veniam quisquam praesentium autem,
        reprehenderit ullam exercitationem vel vero ex accusantium cum
        repudiandae ducimus, minus dolor. Ipsa ad iste atque, maxime quod
        laboriosam dolorem cum pariatur ullam repellendus eveniet impedit
        recusandae, officiis neque aliquam excepturi dicta? Quasi, neque! Fuga
        deserunt consequuntur aut.
      </div>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
