import styled from 'styled-components';
import {
  Button,
  CloseIcon,
  FiltersIcon,
  Font,
  Input,
  M_UP,
  SM_DOWN,
  T_DOWN,
  center,
  row,
  size,
  tokens,
} from '@system/figa-ui';
import Image from 'next/image';
import { useSubject } from '@system/figa-hooks';
import {
  live_articles_actions,
  live_articles_selectors,
  useLiveArticlesStore,
} from '../../store/live-articles';
import Link from 'next/link';
import { useLang } from '../../dk';
import { useState } from 'react';

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

    .input {
      .suffx-wrapper .button {
        ${size(tokens.spacing[500])}
        background: transparent;
        padding: 0;

        &:active {
          outline: none;
        }

        path {
          fill: ${(props) => props.theme.font.default.color};
        }
      }

      @media ${M_UP} {
        width: 300px;
      }
    }

    .articles-jumbo-filters-trigger {
      ${size(tokens.spacing[500])}
      padding: 0;
      margin-left: ${tokens.spacing[150]};
      flex-shrink: 0;
    }
  }

  .articles-jumbo-divider {
    ${row()}
    margin: ${tokens.spacing[350]} 0;

    .font {
      margin: 0 ${tokens.spacing[150]};
    }

    .divider {
      ${size(tokens.spacing[25], tokens.spacing[250])}
      background: ${(props) => props.theme.font.primary.color};
    }
  }
`;

const ArticlesJumbo = () => {
  const liveArticlesState = useLiveArticlesStore();
  const [search, setSearch] = useState(live_articles_selectors.getSearch);
  const lang = useLang();

  const changed = useSubject({
    cb: live_articles_actions.load,
    delay: 500,
  });

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
          <Input
            loading={liveArticlesState.is === 'changing_params'}
            value={search}
            placeholder="🏸 Type to find article..."
            onChange={(e) => {
              setSearch(e.target.value);
              changed.emit({
                Search: e.target.value,
              });
            }}
            suffx={
              search.length > 0 && (
                <Button
                  onClick={() => {
                    setSearch('');
                    live_articles_actions.load({ Search: '' });
                  }}
                >
                  <CloseIcon />
                </Button>
              )
            }
          />
          <Button className="articles-jumbo-filters-trigger">
            <FiltersIcon />
          </Button>
        </div>
        <div className="articles-jumbo-divider">
          <div className="divider" />
          <Font motive="primary" variant="b1">
            OR
          </Font>
          <div className="divider" />
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
