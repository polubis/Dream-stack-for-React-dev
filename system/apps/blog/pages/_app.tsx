import { useEffect } from 'react'
import { ThemeProvider } from '@system/figa-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { intercept } from '@system/blog-api';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    intercept().subscribe(ELO => {
      console.log(ELO)
    })
  }, [])

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
