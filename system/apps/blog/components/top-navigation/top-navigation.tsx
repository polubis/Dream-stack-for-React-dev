import styled from 'styled-components';
import { UserSection } from '../main-layout/user-section';
import {
  Logo,
  Link as FigaUILink,
  Divider,
  tokens,
  row,
  T_DOWN,
} from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';

const Container = styled.nav`
  display: grid;
  align-items: center;
  width: 100%;
  gap: ${tokens.spacing[500]};
  grid-template-columns: 1fr 3fr 1fr;

  ul {
    ${row()}
    justify-content: center;

    & > *:not(:first-child) {
      margin: 0 0 0 ${tokens.spacing[300]};
    }

    .divider {
      margin: ${0} ${tokens.spacing[150]} 0 ${tokens.spacing[450]};
    }
  }

  .top-navigation-user-section {
    justify-self: end;
  }

  @media ${T_DOWN} {
    grid-template-columns: 1fr 1fr;
    gap: ${tokens.spacing[250]};

    ul {
      display: none;
    }
  }
`;

const TopNavigation = () => {
  const lang = useLang();

  return (
    <Container>
      <Logo />
      <ul>
        <li>
          <FigaUILink variant="h6">
            <Link title="Articles" href={`/${lang}/articles/`}>
              Articles
            </Link>
          </FigaUILink>
        </li>
        <Divider axis="y" />
        <li>
          <FigaUILink variant="h6">
            <Link title="Creator" href={`/${lang}/articles-creator/`}>
              Creator
            </Link>
          </FigaUILink>
        </li>
      </ul>
      <div className="top-navigation-user-section">
        <UserSection />
      </div>
    </Container>
  );
};

export { TopNavigation };
