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
  Popover,
  SM_DOWN,
  T_DOWN,
  center,
  streched,
  tokens,
} from '@system/figa-ui';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../../dk';
import { articles_selectors } from 'apps/blog/store/articles';

const Container = styled.section`
  position: relative;
  height: 68vh;
  border-bottom: ${tokens.spacing[25]} solid
    ${(props) => props.theme.navigation.borderColor};

  .articles-jumbo-content {
    ${center('column')}
    ${streched('absolute')}
    margin: 0 auto;
    max-width: 480px;

    & > .font {
      text-align: center;
    }

    & > * {
      &:nth-child(2) {
        margin: ${tokens.spacing[150]} 0 ${tokens.spacing[300]} 0;
      }

      &:nth-child(4) {
        margin: ${tokens.spacing[500]} 0 0 0;
      }
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
  }

  .badge {
    position: absolute;
    bottom: -${tokens.spacing[200]};
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const FoundBadge = () => {
  const state = articles_selectors.useState();
  const { is } = state;

  if (is === 'ok' || is === 'all_loaded') {
    return (
      <Badge variant="filled" motive="casual">
        ({state.articles.length}) articles
      </Badge>
    );
  }

  return null;
};

const ArticlesJumbo = ({ title, description }: ArticlesJumboProps) => {
  const lang = useLang();

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
        <Font variant="h4">{title}</Font>
        <Font variant="b1">{description}</Font>
        <div className="articles-jumbo-filters">
          <Input placeholder="🏸 Type to find article..." />
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
        <Link href={`/${lang}/articles-creator`}>
          <Button variant="outlined">Create article</Button>
        </Link>
      </div>
      <FoundBadge />
    </Container>
  );
};

export { ArticlesJumbo };
