import { NavItem } from "@shared/components/layout";
import "@shared/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <NavItem>
        <Component {...pageProps} />
      </NavItem>
    </>
  );
}

export default MyApp;
