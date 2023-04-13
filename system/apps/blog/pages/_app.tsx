import { GlobalStyle } from '@system/figa-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
