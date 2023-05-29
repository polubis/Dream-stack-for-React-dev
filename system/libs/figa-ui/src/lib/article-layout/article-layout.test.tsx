import { render, screen } from '@testing-library/react';
import { ArticleLayout } from './article-layout';

describe('Article layout can be used when', () => {
  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <ArticleLayout className="my-class">
        <></>
      </ArticleLayout>
    );

    const articleLayout = container.querySelector('.article-layout');

    expect(articleLayout?.className).toContain('article-layout my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders content', () => {
    render(
      <ArticleLayout>
        <div>Content</div>
      </ArticleLayout>
    );

    screen.getByText(/Content/);
  });
});
