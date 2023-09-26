import { ThemeProvider } from '@system/figa-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useAuth } from '../core';

const App = ({ Component, pageProps }: AppProps) => {
  useAuth();

  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
