import { ThemeProvider } from '@system/figa-ui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useAuth } from '../core';

const App = ({ Component, pageProps }: AppProps) => {
  useAuth();

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/LexendMedium.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/LexendBold.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/LexendRegular.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/LexendLight.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <title>Welcome to blog!</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
