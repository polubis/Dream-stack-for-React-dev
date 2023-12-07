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
  size,
  HomeIcon,
  ArticlesSearchIcon,
  BottomNavItem,
  PlusCircleIcon,
  useThemeProvider,
  SunIcon,
  HalfMoonIcon,
  TopNavItem,
  column,
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
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useIsomorphicLayoutEffect, useScrollTo } from '@system/figa-hooks';

const Links = styled.ul`
  ${column()}

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
  const theme = useThemeProvider();
  const pathname = usePathname();

  const [, { toTop }] = useScrollTo();

  useIsomorphicLayoutEffect(() => {
    toTop();
  }, []);

  return (
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
          <Link title="Articles" href={`/${lang}/articles`}>
            <TopNavItem active={pathname === `/${lang}/articles`}>
              Articles <ArticlesSearchIcon />
            </TopNavItem>
          </Link>
          <Link title="Create" href={`/${lang}/articles-creator`}>
            <TopNavItem active={pathname === `/${lang}/articles-creator`}>
              Create <PlusCircleIcon />
            </TopNavItem>
          </Link>
          <TopNavItem
            onClick={() =>
              theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')
            }
          >
            Theme {theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
          </TopNavItem>
        </Nav>
      }
      bottomNav={
        <>
          <NextLink title="Home" href={`/${lang}`}>
            <BottomNavItem
              icon={<HomeIcon />}
              text="Home"
              active={pathname === `/${lang}`}
            />
          </NextLink>
          <NextLink title="Articles" href={`/${lang}/articles`}>
            <BottomNavItem
              icon={<ArticlesSearchIcon />}
              text="Articles"
              active={pathname === `/${lang}/articles`}
            />
          </NextLink>
          <NextLink title="Create" href={`/${lang}/articles-creator`}>
            <BottomNavItem
              icon={<PlusCircleIcon />}
              text="Create"
              active={pathname === `/${lang}/articles-creator`}
            />
          </NextLink>
          <BottomNavItem
            icon={theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
            text="Theme"
            onClick={() =>
              theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')
            }
          />
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
              <Font variant="b2">Powered by GreenOn Software community</Font>
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
                <Button
                  shape="rounded"
                  motive="tertiary"
                  variant="ghost"
                  size={2}
                >
                  <DiscordIcon />
                </Button>
              </a>
              <a
                href={GREEN_ON_SOFTWARE_AUTHOR}
                title="Adrian Połubiński Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  shape="rounded"
                  variant="ghost"
                  motive="tertiary"
                  size={2}
                >
                  <UserIcon />
                </Button>
              </a>
              <a
                href={GREEN_ON_SOFTWARE_LINKEDIN}
                title="Linkedin GreenOn Software profile"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  shape="rounded"
                  motive="tertiary"
                  variant="ghost"
                  size={2}
                >
                  <LinkedinIcon />
                </Button>
              </a>
            </Box>
          }
          blocks={
            <>
              <Box padding={[350, 250, 350, 250]} spacing={[150]}>
                <Font variant="h6">About us</Font>
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
                <Font variant="h6">Recommended articles</Font>
                <RecommendedArticles />
              </Box>
              <Box padding={[350, 250, 350, 250]} spacing={[150]}>
                <Font variant="h6">Navigation</Font>
                <Links>
                  <Link title="Articles" href={`/${lang}/articles`}>
                    <Font variant="b1">Articles</Font>
                  </Link>
                  <Link title="Create" href={`/${lang}/articles-creator`}>
                    <Font variant="b1">Create</Font>
                  </Link>
                </Links>
              </Box>
            </>
          }
        />
      }
    >
      {children}
    </Layout>
  );
};

export { MainLayout };
