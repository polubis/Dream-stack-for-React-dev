import styled from 'styled-components';
import {
  Button,
  Divider,
  Font,
  SM_DOWN,
  T_DOWN,
  center,
  row,
  tokens,
} from '@system/figa-ui';
import Image from 'next/image';
import Link from 'next/link';
import { ArticlesSearchInput } from '../../components/articles-search-input';
import { useLang } from '../../dk';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';

const Container = styled.div`
  position: relative;
  padding: ${tokens.spacing[500]} ${tokens.spacing[250]};
  border-bottom: ${tokens.spacing[25]} solid
    ${(props) => props.theme.box.outlined.borderColor};

  .articles-jumbo-content {
    ${center('column')}
    max-width: 500px;
    margin: auto;

    & > * {
      z-index: ${tokens.z[50]};

      &.b1 {
        margin: ${tokens.spacing[150]} 0 ${tokens.spacing[350]} 0;
      }
    }
  }

  .articles-jumbo-filters {
    ${row()}
    z-index: ${tokens.z[100]};

    & > *:first-child {
      margin-right: ${tokens.spacing[150]};
    }
  }

  .articles-jumbo-divider {
    ${row()}
    margin: ${tokens.spacing[350]} 0;

    .font {
      margin: 0 ${tokens.spacing[150]};
    }
  }
`;

const ArticlesJumbo = () => {
  const lang = useLang();

  return (
    <Container>
      <Image
        fill
        priority
        src={'/assets/bubbles.png'}
        title="Articles filters"
        alt="Articles filters"
        sizes={`${SM_DOWN} 100%, ${T_DOWN}800px, 1080px`}
      />
      <div className="articles-jumbo-content">
        <Font align="center" variant="h4">
          Find something to read
        </Font>
        <Font align="center" variant="b1">
          When writing our articles, we place great emphasis on the quality of
          their content and teaching materials. Thanks to this you will be able
          to find meaningful materials and understand complex topics.
        </Font>
        <div className="articles-jumbo-filters">
          <ArticlesSearchInput />
          <ArticlesTagsSelect />
        </div>
        <div className="articles-jumbo-divider">
          <Divider motive="primary" />
          <Font motive="primary" variant="b1">
            OR
          </Font>
          <Divider motive="primary" />
        </div>
        <Link
          className="articles-jumbo-create-link"
          href={`/${lang}/articles-creator`}
        >
          <Button size={2} variant="outlined">
            Create article
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export { ArticlesJumbo };
