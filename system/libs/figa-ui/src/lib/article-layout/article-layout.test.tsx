import { render, screen } from '@testing-library/react';
import { ArticleLayout } from './article-layout';

describe('Article layout can be used when', () => {
  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <ArticleLayout className="my-class" thumbnail={null}>
        <div>Content</div>
      </ArticleLayout>
    );

    const articleLayout = container.querySelector('.article-layout');

    expect(articleLayout?.className).toContain('article-layout my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders content', () => {
    render(
      <ArticleLayout thumbnail={null}>
        <div>Content</div>
      </ArticleLayout>
    );

    screen.getByText(/Content/);
  });

  it('allows to render thumbnail', () => {
    const { asFragment } = render(
      <ArticleLayout
        thumbnail={
          <img src="https://localhost:3000/img/image.png" alt="Thumbnail" />
        }
      >
        <div>Content</div>
      </ArticleLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
