import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Alert from "../src/shared/modal/Alert";
import "@shared/styles/globals.css";
import Confirm from "../src/shared/modal/Confirm";
import Header from '@shared/component/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Alert />
      <Confirm />
    </RecoilRoot>
  );
}

export default MyApp;
