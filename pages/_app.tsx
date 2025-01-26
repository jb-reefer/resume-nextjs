import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

export const ResumeApp = (props: { Component: any; pageProps: any[] }) => (
  <>
    <Head>
      <title>JB Reefer's Resume</title>
      <meta property="twitter:image" content="/public/favicon.ico"></meta>
      <meta property="twitter:title" content="JB Reefer's Resume"></meta>
      <meta property="twitter:description" content=""></meta>
      <meta property="description" content="JB Reefer's Resume" />
      <meta property="og:image" content="/public/favicon.ico"></meta>
      <meta property="og:description" content="JB Reefer's Resume" />
    </Head>
    <Analytics />
    <props.Component {...props.pageProps} />
  </>
);

export default ResumeApp;
