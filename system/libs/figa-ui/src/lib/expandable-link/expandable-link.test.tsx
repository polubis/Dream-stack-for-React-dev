import { render } from '@testing-library/react';
import { ExpandableLink } from './expandable-link';
import { ThemeProvider } from '../theme-provider';

describe('Exapndable link can be used when:', () => {
  const Fixture = () => {
    return (
      <ThemeProvider>
        <ExpandableLink isActive className="my-class-container">
          <ExpandableLink.Name className="my-class-name">
            Inputs
          </ExpandableLink.Name>
          <ExpandableLink.List className="my-class-list">
            <ExpandableLink.Item
              className="my-class-item"
              path="/?path=/story/input--empty-input"
            >
              Empty Input
            </ExpandableLink.Item>
            <ExpandableLink.Item path="/?path=/story/input--filled-input">
              Filled Input
            </ExpandableLink.Item>
          </ExpandableLink.List>
        </ExpandableLink>
      </ThemeProvider>
    );
  };

  it('[FRAGILE] assigns class names for particular nodes', () => {
    const { asFragment } = render(<Fixture />);

    expect(asFragment()).toMatchSnapshot();
  });
});
