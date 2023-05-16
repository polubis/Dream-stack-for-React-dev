import { ThemeProvider, Sandbox } from '@system/figa-ui';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to jamjam!</title>
      </Head>
      <ThemeProvider>
        <Sandbox>
          <Component {...pageProps} />
        </Sandbox>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
