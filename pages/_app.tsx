import Head from "next/head";

import "../styles/globals.css";

export const ResumeApp = (props: { Component: any; pageProps: any[] }) => (
  <>
    <Head>
      <title>JB Reefer's Resume</title>
    </Head>
    <props.Component {...props.pageProps} />
  </>
);

export default ResumeApp;
