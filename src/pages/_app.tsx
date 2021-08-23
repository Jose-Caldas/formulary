import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Head from "next/head";
import { UserProvider } from "../context/user-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Head>
          <title>Formulary</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
