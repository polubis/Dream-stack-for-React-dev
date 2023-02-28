import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Bell } from '@system/figa-ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <Bell />
      </main>
    </>
  );
}

export default CustomApp;
