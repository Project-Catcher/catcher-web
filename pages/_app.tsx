import Header from "header/components";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Alert from "@shared/modal/Alert";
import Confirm from "@shared/modal/Confirm";
import Modal from "@shared/modal/Modal";
import "@shared/styles/globals.css";

if (
  process.env.NEXT_PUBLIC_NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_MOCK === "true"
) {
  import("mock");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Modal />
      <Alert />
      <Confirm />
    </RecoilRoot>
  );
}

export default MyApp;
