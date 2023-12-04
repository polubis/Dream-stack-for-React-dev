import { render, screen } from '@testing-library/react';
import { CodeBlock } from './code-block';
import { ThemeProvider } from '../theme-provider';

describe('Code block can be used when', () => {
  it('[FRAGILE] assigns class names by properties', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <CodeBlock className="my-class">
          <div>Content</div>
        </CodeBlock>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] renders default dots as header', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <CodeBlock>
          <div>Content</div>
        </CodeBlock>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to render header and children', () => {
    render(
      <ThemeProvider>
        <CodeBlock
          header={(Dots) => (
            <>
              {Dots} <div>Custom header</div>
            </>
          )}
        >
          <div>Content</div>
        </CodeBlock>
      </ThemeProvider>
    );

    screen.getByText(/Custom header/);
    screen.getByText(/Content/);
  });
});
