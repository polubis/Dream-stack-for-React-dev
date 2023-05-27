import { Font, Footer, Layout, Logo, Navigation } from '@system/figa-ui';
import type { HomeViewProps } from './defs';

const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <Layout
      full
      header={<Navigation logo={<Logo />} links={[]} action={<></>} />}
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
      <Font variant="h1">Headline1</Font>
    </Layout>
  );
};

export { HomeView };
