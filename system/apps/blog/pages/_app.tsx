import { Sandbox, ThemeProvider } from '@system/figa-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <ThemeProvider>
        <Sandbox>
          <Component {...pageProps} />
        </Sandbox>
      </ThemeProvider>
    </>
  );
};

export default App;
