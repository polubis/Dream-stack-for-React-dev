import { Font, Footer, Layout, Link, Logo, Navigation } from '@system/figa-ui';
import NextLink from 'next/link';

const Index = () => {
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

export default Index;
