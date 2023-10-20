import styled from 'styled-components';
import {
  Button,
  CloseIcon,
  Divider,
  Font,
  Input,
  M_UP,
  SM_DOWN,
  T_DOWN,
  center,
  row,
  size,
  tokens,
  wrap,
} from '@system/figa-ui';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../../dk';
import { type ChangeEventHandler, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLiveArticlesRouter } from './use-live-articles-router';
import { FiltersPopover } from './filters-popover';

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

    button.articles-jumbo-filters-trigger {
      ${size(tokens.spacing[500])}
      padding: 0;
      margin-left: ${tokens.spacing[150]};
      flex-shrink: 0;
    }

    .articles-jumbo-tags {
      ${wrap()}

      .articles-jumbo-tag {
        margin: 0 ${tokens.spacing[100]} ${tokens.spacing[100]} 0;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
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
  const searchParams = useSearchParams();
  const { getParams, go } = useLiveArticlesRouter();
  const [search, setSearch] = useState('');
  const lang = useLang();

  useEffect(() => setSearch(getParams().Search), [searchParams, getParams]);

  const handleSearchChange = (value: string): void => {
    go(() => ({
      Search: value,
      CurrentPage: 1,
    }));
  };

  const handleType: ChangeEventHandler<HTMLInputElement> = (e) => {
    handleSearchChange(e.target.value);
  };

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
            value={search}
            placeholder="🏸 Type to find article..."
            onChange={handleType}
            suffx={
              search.length > 0 && (
                <Button onClick={() => handleSearchChange('')}>
                  <CloseIcon />
                </Button>
              )
            }
          />
          <FiltersPopover />
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
