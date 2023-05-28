import { render, screen } from '@testing-library/react';
import { CodeBlock } from './code-block';

describe('Code block can be used when', () => {
  it('[FRAGILE] assigns class names by properties', () => {
    const { container, asFragment } = render(
      <CodeBlock className="my-class">
        <></>
      </CodeBlock>
    );

    const codeBlock = container.querySelector('.code-block');

    expect(codeBlock?.className).toBe('code-block my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] renders default dots as header', () => {
    const { asFragment } = render(
      <CodeBlock>
        <></>
      </CodeBlock>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to render header and children', () => {
    render(
      <CodeBlock
        header={(Dots) => (
          <>
            {Dots} <div>Custom header</div>
          </>
        )}
      >
        <div>Content</div>
      </CodeBlock>
    );

    screen.getByText(/Custom header/);
    screen.getByText(/Content/);
  });
});
