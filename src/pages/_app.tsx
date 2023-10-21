import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Alert from "../../shared/modal/Alert";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Alert />
    </RecoilRoot>
  );
}

export default MyApp;
