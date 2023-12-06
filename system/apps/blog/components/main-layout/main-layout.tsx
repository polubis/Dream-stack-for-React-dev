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
  Nav,
  tokens,
  row,
  M_DOWN,
  AlertsProvider,
  size,
  HomeIcon,
  ArticlesSearchIcon,
  BottomNavItem,
  PlusCircleIcon,
  MoreIcon,
  ArrowTopIcon,
  useThemeProvider,
  SunIcon,
  HalfMoonIcon,
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
import { useScrollTo } from '@system/figa-hooks';

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

const MainLayout = ({ children, sidebar, offPadding }: MainLayoutProps) => {
  const lang = useLang();
  const [, { toTop }] = useScrollTo();
  const theme = useThemeProvider();

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
        topNav={
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
        }
        bottomNav={
          <>
            <BottomNavItem icon={<HomeIcon />} text="Home" />
            <BottomNavItem
              icon={<ArrowTopIcon />}
              text="Top"
              onClick={() => toTop()}
            />
            <BottomNavItem icon={<ArticlesSearchIcon />} text="Articles" />
            <BottomNavItem icon={<PlusCircleIcon />} text="Create" />
            <BottomNavItem
              active
              icon={theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
              text="Theme"
              onClick={() =>
                theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')
              }
            />
            <BottomNavItem active icon={<MoreIcon />} text="More" />
          </>
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
    </AlertsProvider>
  );
};

export { MainLayout };
