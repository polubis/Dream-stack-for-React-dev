import { ThemeProvider } from '@system/figa-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useAuthStore } from '../store';
import { useClientEffect } from '../utils';

const App = ({ Component, pageProps }: AppProps) => {
  const authStore = useAuthStore();

  useClientEffect(authStore.check);

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
