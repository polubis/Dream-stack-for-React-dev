import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { spacing, tokens, wrap } from '@system/figa-ui';
import { Link } from '../link';
import Image from 'next/image';
import { useRecommendedArticlesStore } from '../../store/recommended-articles';
import { useLang } from '../../dk';
import { get } from '@system/blog-selectors';

const Container = styled.div`
  ${wrap()}
`;

const Placeholder = styled.div`
  width: ${spacing.parse(850)}px;
  height: ${spacing.parse(600)}px;
  background: ${tokens.gray[200]};
  margin: 0 ${tokens.spacing[150]} ${tokens.spacing[150]} 0;
  border-radius: ${tokens.radius[50]};

  &:hover {
    outline: ${tokens.spacing[25]} solid ${(props) => props.theme.outline.color};
    outline-offset: ${tokens.spacing[25]};
  }
`;

const RecommendedArticles = () => {
  const lang = useLang();
  const { key, articles, load } = useRecommendedArticlesStore();
  const [articlesLoaded, setArticlesLoaded] = useState(false);

  useEffect(() => {
    if (key === 'idle') load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (key === 'ok') {
      // Artykuły zostały załadowane, więc ustawiamy flagę na true
      setArticlesLoaded(true);
    }
  }, [key]);

  return (
    <Container data-i={get('app-footer-recommended-articles-list')}>
      {articlesLoaded
        ? articles.slice(0, 8).map((article) => (
            <Link key={article.id} href={`/${lang}/articles/${article.title}`}>
              <Image
                alt={article.title}
                src={article.thumbnailUrl}
                width={spacing.parse(850)}
                height={spacing.parse(600)}
              />
            </Link>
          ))
        : // Renderujemy 8 szarych zastępów (placeholders)
          new Array<undefined>(8)
            .fill(undefined)
            .map((_, index) => <Placeholder key={index} />)}
    </Container>
  );
};

export { RecommendedArticles };
