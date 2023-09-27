import { ThemeProvider } from '@system/figa-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useAuth } from '../core';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useAuth();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log(
            'Service Worker registered with scope:',
            registration.scope
          );
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <meta title="App" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
