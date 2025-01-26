import Head from "next/head";

import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JB Reefer's Resume</title>
      </Head>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
