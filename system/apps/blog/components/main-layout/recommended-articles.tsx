import { useEffect } from 'react';
import styled from 'styled-components';
import { spacing, tokens, wrap } from '@system/figa-ui';
import { Link } from '../link';
import Image from 'next/image';
import { useRecommendedArticlesStore } from '../../store/recommended-articles';
import { useLang } from '../../dk';
import { get } from '@system/blog-selectors';

const Container = styled.div`
  ${wrap()}

  a {
    margin: 0 ${tokens.spacing[150]} ${tokens.spacing[150]} 0;
    border-radius: ${tokens.radius[50]};

    &:hover {
      outline: ${tokens.spacing[25]} solid
        ${(props) => props.theme.outline.color};
      outline-offset: ${tokens.spacing[25]};
    }

    img {
      border-radius: ${tokens.radius[50]};
    }
  }
`;

const RecommendedArticles = () => {
  const lang = useLang();

  const { key, articles, load } = useRecommendedArticlesStore();

  useEffect(() => {
    if (key === 'idle') load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  if (key === 'ok') {
    return (
      <Container data-i={get('app-footer-recommended-articles-list')}>
        {articles.map((article) => (
          <Link key={article.id} href={`/${lang}/articles/${article.title}`}>
            <Image
              alt={article.title}
              src={article.thumbnailUrl}
              width={spacing.parse(850)}
              height={spacing.parse(600)}
            />
          </Link>
        ))}
      </Container>
    );
  }

  return null;
};

export { RecommendedArticles };
