import {
  Footer,
  Layout,
  Logo,
  Navigation,
  Link as FigaUILink,
  Button,
  Font,
  Box,
} from '@system/figa-ui';
import type { MainLayoutProps } from './defs';
import { Link } from '../link';

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
          logo={<div>L</div>}
          socials={<>a</>}
          blocks={
            <>
              <Box spacing={[150]}>
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
              <Box spacing={[150]}>
                <Font variant="h5">Recommended articles</Font>
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
              <Box spacing={[150, 100, 100, 100, 100, 100]}>
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
