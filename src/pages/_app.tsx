import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Alert from "../../shared/modal/Alert";
import "../../styles/globals.css";
import Confirm from "../../shared/modal/Confirm";

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
