import { Layout, Logo, NavBar, Navigation } from '@system/figa-ui';
import { UserSection } from '../main-layout/user-section';
import type { AdminLayoutProps } from './defs';
import { useLang } from '../../dk';
import { Link } from '../link';
import { Link as FigaUILink } from '@system/figa-ui';

const LABELS = ['Accept articles'] as const;
const URLS = ['/'] as const;

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const lang = useLang();

  const links = LABELS.map((label, idx) => (
    <FigaUILink variant="h6" key={label}>
      <Link href={'/' + lang + URLS[idx]}>{label}</Link>
    </FigaUILink>
  ));

  return (
    <Layout
      header={
        <NavBar>
          <Navigation logo={<Logo />} links={links} action={<UserSection />} />
        </NavBar>
      }
    >
      {children}
    </Layout>
  );
};

export { AdminLayout };
