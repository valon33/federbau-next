import Head from "next/head";
import { Fragment } from "react";
import MainLayout from "../Layout/MainLayout";
import { LanguageContextProvider } from "../store/languageCtx";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </LanguageContextProvider>
  );
}

export default MyApp;
