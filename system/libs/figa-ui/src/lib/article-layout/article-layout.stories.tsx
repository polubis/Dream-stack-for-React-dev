import type { Story, Meta } from '@storybook/react';

import { ArticleLayout } from './article-layout';
import { Font } from '../font';
import { CodeBlock } from '../code-block';
import { Link } from '../link';
import { Box } from '../box';
import { Code } from '../code';
import { List, ListItem } from '../list';

export default {
  component: ArticleLayout,
  title: 'ArticleLayout',
} as Meta;

const Template: Story = () => {
  return (
    <Box>
      <ArticleLayout>
        <Font variant="h4">Prelude</Font>
        <Font variant="b1">
          We grouped our tests into functionalities, and now we need to
          understand how to divide tests by the context that they verify.
        </Font>
        <Font variant="h4">What are the types of tests?</Font>
        <Font variant="b1">
          Taking into account the area we are testing, the test can be divided
          into the following types:
        </Font>
        <Font variant="b1">
          **Unit tests** are fast and precise. They are focused on a specific
          thing and answer concrete questions.
        </Font>
        <Font variant="b1">
          In the context of a pizza creation it will be the following
          situations:
        </Font>
        <CodeBlock>
          <Code readonly>
            {`describe('Pizza meets standards when', () => {
  // Take a meter and measure this.
  it('size is between 30-40 cm', () => {});

  // It's easy to check.
  it('cake is brown', () => {});

  // This is visible.
  it('cheese is melted', () => {});

  // You can touch cake.
  it('cake is warm', () => {});

  // This is visible.
  it('plate is clean', () => {});
});`}
          </Code>
        </CodeBlock>
        <Font variant="b1">
          **Integration tests** verifies cooperation. They are also quite fast.
          When we write them, we don't focus on specific things as in unit tests
          but on checking that "something" has been used as intended.
        </Font>
        <Font variant="b1">
          Instead of checking if the pizza size, color, and other, we can check
          if it was made according to the recipe in the book. Below is an
          example of such tests:
        </Font>
        <CodeBlock>
          <Code readonly>
            {`describe('Pizza meets standards when', () => {
  // We assume that the recipe contains the necessary steps.
  it('recipe is used from page 31', () => {});

  // Instead of verifying the size of the pizza and other
  // necessary things, we assume that the cook
  // already "knows" this and he will check it.
  it('the person making the pizza is supervised by the cook', () => {});
});`}
          </Code>
        </CodeBlock>
        <Font variant="b1">
          **E2e tests** focus on the user's perspective, not the implementation.
          They are technologically agnostic and usually execute for a long time
          (they operate on the finished application, not code fragments).
        </Font>
        <Font variant="b1">
          Instead of checking what's going on in the kitchen, how the pizza is
          made and based on what recipe - we simply ask the customer what he
          thinks about the taste (the customer is our application).
        </Font>
        <CodeBlock>
          <Code readonly>
            {`describe('Pizza meets standards when', () => {
  it('customer enjoys the taste', () => {});
});`}
          </Code>
        </CodeBlock>
        <Font variant="h4">Summary</Font>
        <Font variant="b1">
          As you might have noticed, mainly the context changes. We started with
          a single employee (code file), we moved to a communication perspective
          (several code files), and at the very end we left the implementation
          behind and simply asked the customer (application) what he thinks
          about our product.
        </Font>
        <List>
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
          <ListItem>Last</ListItem>
        </List>
        <Font variant="b1">
          **Unit tests** are fast and precise. They are focused on a specific
          thing and answer concrete questions.
        </Font>
        <List ordered>
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
          <ListItem>Last</ListItem>
        </List>
        <Font variant="b1">
          That's the difference between the different types of tests. Don't
          worry, it will get into your blood in the next lessons.
        </Font>
        <Font variant="b1">
          If you enjoyed it, be sure to visit us on our{' '}
          <Link variant="b1" motive="primary">
            <a href="a">Linkedin</a>
          </Link>{' '}
          where we regularly upload content from programming.
        </Font>
      </ArticleLayout>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
