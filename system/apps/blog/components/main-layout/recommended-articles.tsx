import { useEffect } from 'react';
import styled from 'styled-components';
import { size, spacing, tokens, wrap } from '@system/figa-ui';
import { Link } from '../link';
import Image from 'next/image';
import {
  recommended_articles_actions,
  useRecommendedArticlesStore,
} from '../../store/recommended-articles';
import { useLang } from '../../dk';
import { useIntersectionObserver } from '@system/figa-hooks';

const Container = styled.div`
  ${wrap()}

  & > * {
    ${size(tokens.spacing[600], tokens.spacing[850])};
    background: ${(props) => props.theme.box.filled.bg};
    margin: 0 ${tokens.spacing[150]} ${tokens.spacing[150]} 0;
    border-radius: ${tokens.radius[50]};

    img {
      border-radius: ${tokens.radius[50]};
    }
  }

  a {
    &:hover {
      outline: ${tokens.spacing[25]} solid
        ${(props) => props.theme.outline.color};
      outline-offset: ${tokens.spacing[25]};
    }
  }
`;

const articles_limit = 16;

const Placeholders = Array.from({ length: articles_limit }).map((_, i) => (
  <div key={i} />
));

const RecommendedArticles = () => {
  const lang = useLang();

  const recommendedArticlesState = useRecommendedArticlesStore();
  const { is } = recommendedArticlesState;
  const { ref, visible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  useEffect(() => {
    recommended_articles_actions.load(articles_limit, lang);
  }, [lang]);

  const Content =
    !visible || is === 'idle' || is === 'fail' || is === 'busy'
      ? Placeholders
      : recommendedArticlesState.articles.map((article) => (
          <Link
            title="Footer thumbnail"
            key={article.id}
            href={`/${lang}/articles/${article.title}`}
          >
            <Image
              alt={article.title}
              src={article.thumbnailUrl}
              width={spacing.parse(850)}
              height={spacing.parse(600)}
            />
          </Link>
        ));

  return <Container ref={ref}>{Content}</Container>;
};

export { RecommendedArticles };
