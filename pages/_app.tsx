import { NavItem } from "@shared/components/layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavItem>
      <Component {...pageProps} />
    </NavItem>
  );
}

export default MyApp;
