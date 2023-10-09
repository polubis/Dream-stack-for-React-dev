import styled from 'styled-components';
import type { ArticlesJumboProps } from './defs';
import {
  Badge,
  Box,
  Button,
  CloseIcon,
  FiltersIcon,
  Font,
  Input,
  M_DOWN,
  Popover,
  SM_DOWN,
  T_DOWN,
  center,
  column,
  row,
  size,
  streched,
  tokens,
  wrap,
} from '@system/figa-ui';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../../dk';
import {
  articles_actions,
  articles_selectors,
  useArticlesStore,
} from '../../store/articles';

const Container = styled.section`
  ${center()}
  position: relative;
  border-bottom: ${tokens.spacing[25]} solid
    ${(props) => props.theme.navigation.borderColor};

  .articles-jumbo-content {
    ${column()}
    align-items: center;
    z-index: ${tokens.z[50]};
    max-width: 480px;
    padding: ${tokens.spacing[500]} ${tokens.spacing[250]};

    & > .b1 {
      margin: ${tokens.spacing[150]} 0 ${tokens.spacing[300]} 0;
    }

    .articles-jumbo-filters {
      ${center()}
      width: 100%;

      .input {
        width: 100%;
      }

      .button,
      .input {
        height: ${tokens.spacing[600]};
      }

      & > * {
        &:last-child {
          margin-left: ${tokens.spacing[150]};
        }
      }
    }

    .articles-jumbo-badges {
      ${wrap()}
      min-height: ${tokens.spacing[400]};
      width: 100%;
      padding: ${tokens.spacing[200]} 0 ${tokens.spacing[100]} 0;

      & > * {
        margin: 0 ${tokens.spacing[100]} ${tokens.spacing[100]} 0;
        flex-shrink: 0;
      }

      @media ${M_DOWN} {
        flex-flow: row;
        overflow-x: auto;

        & > * {
          margin: 0 ${tokens.spacing[100]} 0 0;

          &:last-child {
            margin: 0 0 0 0;
          }
        }
      }
    }

    .articles-jumbo-divider {
      ${row()}
      margin: ${tokens.spacing[150]} 0 ${tokens.spacing[300]} 0;

      @media ${M_DOWN} {
        margin: ${tokens.spacing[250]} 0 ${tokens.spacing[300]} 0;
      }

      .font {
        margin: 0 ${tokens.spacing[150]};
      }

      .divider {
        ${size(tokens.spacing[25], tokens.spacing[250])}
        background: ${(props) => props.theme.font.primary.color};
      }
    }
  }
`;

const FoundBadge = () => {
  const state = articles_selectors.useState();
  const { is } = state;

  return (
    <Badge variant="filled" motive="casual">
      {is === 'ok' || is === 'all_loaded'
        ? `(${state.articles.length}) articles`
        : 'Wait...'}
    </Badge>
  );
};

const ArticlesJumbo = ({ title, description }: ArticlesJumboProps) => {
  const lang = useLang();
  const {
    filters: { query },
  } = useArticlesStore();

  const hasQuery = query !== '';

  return (
    <Container>
      <Image
        fill
        priority
        src={'/assets/bubbles.png'}
        title={title}
        alt={title}
        sizes={`${SM_DOWN} 100%, ${T_DOWN}800px, 1080px`}
      />
      <div className="articles-jumbo-content">
        <Font align="center" variant="h4">
          {title}
        </Font>
        <Font align="center" variant="b1">
          {description}
        </Font>
        <div className="articles-jumbo-filters">
          <Input
            value={query}
            placeholder="🏸 Type to find article..."
            onChange={(e) => articles_actions.changeQuery(e.target.value)}
          />
          <Popover
            trigger={({ toggle, opened }) => (
              <Button size={2} onClick={toggle}>
                {opened ? <CloseIcon /> : <FiltersIcon />}
              </Button>
            )}
          >
            {() => (
              <Box
                spacing={[200, 400, 400, 100, 400]}
                padding={[250, 250, 250, 250]}
                variant="outlined"
                minWidth="280px"
                maxWidth="420px"
              >
                <Font variant="h5">Additional filters</Font>
              </Box>
            )}
          </Popover>
        </div>
        <div className="articles-jumbo-badges">
          <FoundBadge />
          {hasQuery && <Badge motive="ok">Query</Badge>}
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
          <Button variant="outlined">Create article</Button>
        </Link>
      </div>
    </Container>
  );
};

export { ArticlesJumbo };
