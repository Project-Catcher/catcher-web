import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "@shared/component/header";
import "@shared/styles/globals.css";
import Alert from "../src/shared/modal/Alert";
import Confirm from "../src/shared/modal/Confirm";

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
