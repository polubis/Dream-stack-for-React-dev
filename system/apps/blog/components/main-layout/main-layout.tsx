import {
  Footer,
  Layout,
  Logo,
  Navigation,
  Link as FigaUILink,
  Button,
  Font,
  Box,
  DiscordIcon,
  LinkedinIcon,
  UserIcon,
  LogoGraphic,
} from '@system/figa-ui';
import type { MainLayoutProps } from './defs';
import { Link } from '../link';
import {
  GREEN_ON_SOFTWARE_AUTHOR,
  GREEN_ON_SOFTWARE_DISCORD,
  GREEN_ON_SOFTWARE_LINKEDIN,
  GREEN_ON_SOFTWARE_COMPANY,
} from '../../constants';

const LABELS = ['Home', 'Articles', 'Authors', 'Creator', 'Courses'] as const;
const URLS = [
  '/home/',
  '/articles/',
  '/authors/',
  '/creator/',
  '/courses/',
] as const;

const MainLayout = ({ children }: MainLayoutProps) => {
  const links = LABELS.map((label, idx) => (
    <FigaUILink variant="h6" key={label}>
      <Link href={URLS[idx]}>{label}</Link>
    </FigaUILink>
  ));

  return (
    <Layout
      full
      header={
        <Navigation
          logo={<Logo />}
          links={links}
          action={
            <Link href="/login/">
              <Button>Join us</Button>
            </Link>
          }
        />
      }
      footer={
        <Footer
          logo={
            <Box orientation="row" spacing={[150]}>
              <FigaUILink variant="b2" motive="primary">
                <a
                  href={GREEN_ON_SOFTWARE_COMPANY}
                  title="GreenOn Software company"
                  target="_blank"
                  rel="noreferrer"
                >
                  Powered by GreenOn Software
                </a>
              </FigaUILink>
              <LogoGraphic size={32} />
            </Box>
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
                    <Link href="/community-form/">this form</Link>
                  </FigaUILink>
                  .
                </Font>
              </Box>
              <Box padding={[350, 250, 350, 250]} spacing={[150]}>
                <Font variant="h5">Recommended articles</Font>
              </Box>
              <Box
                padding={[350, 250, 350, 250]}
                spacing={[150, 150, 150, 150, 150, 150]}
              >
                <Font variant="h5">Navigation</Font>
                {links}
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
