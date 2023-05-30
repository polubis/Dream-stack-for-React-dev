import { render } from '@testing-library/react';
import { List, ListItem } from './list';
import type { ListProps } from './defs';
import type { ReactNode } from 'react';

describe('List can be used when', () => {
  const listFixture = (props: Partial<ListProps> = {}) => {
    const children: ReactNode = (
      <>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
        <ListItem>Fourth item</ListItem>
      </>
    );

    const result = render(<List children={children} {...props} />);

    return result;
  };

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = listFixture({
      className: 'my-class',
      children: (
        <>
          <ListItem className="first-item-class">First item</ListItem>
          <ListItem>Second item</ListItem>
        </>
      ),
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to render unordered list', () => {
    const { asFragment } = listFixture();

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to render ordered list', () => {
    const { asFragment } = listFixture({ ordered: true });

    expect(asFragment()).toMatchSnapshot();
  });
});
