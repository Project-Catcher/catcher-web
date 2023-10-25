import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Alert from "../src/shared/modal/Alert";
import "@shared/styles/globals.css";
import Confirm from "../src/shared/modal/Confirm";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Alert />
      <Confirm />
    </RecoilRoot>
  );
}

export default MyApp;
