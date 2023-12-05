import {
  Footer,
  Layout,
  Logo,
  Link as FigaUILink,
  Button,
  Font,
  Box,
  DiscordIcon,
  LinkedinIcon,
  UserIcon,
  LogoGraphic,
  NavBar,
  Nav,
  tokens,
  row,
  M_DOWN,
  AlertsProvider,
  size,
} from '@system/figa-ui';
import type { MainLayoutProps } from './defs';
import { Link } from '../link';
import {
  GREEN_ON_SOFTWARE_AUTHOR,
  GREEN_ON_SOFTWARE_DISCORD,
  GREEN_ON_SOFTWARE_LINKEDIN,
  GREEN_ON_SOFTWARE_COMPANY,
} from '../../consts';
import { UserSection } from './user-section';
import { useLang } from '../../dk/use-lang';
import { RecommendedArticles } from './recommended-articles';
import styled from 'styled-components';
import { LeftBar } from './left-bar';

const LABELS = ['Articles', 'Creator'] as const;
const URLS = ['/articles/', '/articles-creator/'] as const;

const Links = styled.ul`
  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[100]};
  }
`;

const CompanyLink = styled.a`
  ${row()}

  @media ${M_DOWN} {
    .font {
      display: none;
    }
  }

  .font {
    margin-right: ${tokens.spacing[150]};
  }

  * {
    flex-shrink: 0;
  }
`;

const LogoWrapper = styled.div`
  @media ${M_DOWN} {
    .logo-graphic {
      ${size(tokens.spacing[500])}
    }

    .logo-text {
      display: none;
    }
  }
`;

const MainLayout = ({
  children,
  sidebar,
  offPadding,
  sticky,
}: MainLayoutProps) => {
  const lang = useLang();

  const links = LABELS.map((label, idx) => (
    <Nav.Link variant="h6" key={label}>
      <Link title={label} href={'/' + lang + URLS[idx]}>
        {label}
      </Link>
    </Nav.Link>
  ));

  return (
    <AlertsProvider>
      <Layout
        offPadding={offPadding}
        header={
          <NavBar sticky={sticky}>
            <Nav
              logo={
                <LogoWrapper>
                  <Logo />
                </LogoWrapper>
              }
              actions={<UserSection />}
            >
              {links}
            </Nav>
          </NavBar>
        }
        sidebar={sidebar}
        footer={
          <Footer
            logo={
              <CompanyLink
                href={GREEN_ON_SOFTWARE_COMPANY}
                title="GreenOn Software company"
                target="_blank"
                rel="noreferrer"
              >
                <Font variant="b2" motive="primary">
                  Powered by GreenOn Software community
                </Font>
                <LogoGraphic size={32} />
              </CompanyLink>
            }
            socials={
              <Box orientation="row" spacing={[150, 150]}>
                <a
                  href={GREEN_ON_SOFTWARE_DISCORD}
                  title="GreenOn Software Discord channel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button shape="rounded" size={1}>
                    <DiscordIcon />
                  </Button>
                </a>
                <a
                  href={GREEN_ON_SOFTWARE_AUTHOR}
                  title="Adrian Połubiński Linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button shape="rounded" size={1}>
                    <UserIcon />
                  </Button>
                </a>
                <a
                  href={GREEN_ON_SOFTWARE_LINKEDIN}
                  title="Linkedin GreenOn Software profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button shape="rounded" size={1}>
                    <LinkedinIcon />
                  </Button>
                </a>
              </Box>
            }
            blocks={
              <>
                <Box padding={[350, 250, 350, 250]} spacing={[150]}>
                  <Font variant="h5">About us</Font>
                  <Font variant="b1">
                    We are an educational platform that produces high quality
                    articles, courses and teaching materials. You can join our
                    community via{' '}
                    <FigaUILink variant="b1" motive="primary">
                      <Link title="Community form" href="/community-form/">
                        this form
                      </Link>
                    </FigaUILink>
                    .
                  </Font>
                </Box>
                <Box padding={[350, 250, 350, 250]} spacing={[150]}>
                  <Font variant="h5">Recommended articles</Font>
                  <RecommendedArticles />
                </Box>
                <Box padding={[350, 250, 350, 250]} spacing={[150]}>
                  <Font variant="h5">Navigation</Font>
                  <Links>{links}</Links>
                </Box>
              </>
            }
          />
        }
      >
        {children}
      </Layout>
      <LeftBar />
    </AlertsProvider>
  );
};

export { MainLayout };
