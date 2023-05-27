import {
  Footer,
  Layout,
  Logo,
  Navigation,
  Link as FigaUILink,
  Button,
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
              <div>A</div>
              <div>A</div>
              <div>A</div>
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
