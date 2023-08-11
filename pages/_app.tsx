import Head from "next/head";

import "../styles/globals.css";

export const ResumeApp = (props: { Component: any; pageProps: any[] }) => (
  <>
    <Head>
      <title>JB Reefer's Resume</title>
      <meta property="twitter:image" content="/public/favicon.ico"></meta>
      <meta property="twitter:title" content="JB Reefer's Resume"></meta>
      <meta property="twitter:description" content=""></meta>
      <meta property="og:image" content="/public/favicon.ico"></meta>
    </Head>
    <props.Component {...props.pageProps} />
  </>
);

export default ResumeApp;
