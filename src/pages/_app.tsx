import { AppProps } from "next/app";
import "../styles/global.scss";
import { Header } from "../components/Header/index";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
