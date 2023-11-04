import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Alert from "@shared/modal/Alert";
import Confirm from "@shared/modal/Confirm";
import Modal from "@shared/modal/Modal";
import "@shared/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Alert />
      <Confirm />
      <Modal />
    </RecoilRoot>
  );
}

export default MyApp;
