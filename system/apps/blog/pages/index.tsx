import { Font, Footer, Layout, Logo, Navigation } from '@system/figa-ui';
import type { GetStaticProps } from 'next';
import type { Article } from '@system/blog-models';

interface HomePageProps {
  articles: Article[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      articles: [],
    },
  };
};

const Index = ({ articles }: HomePageProps) => {
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
