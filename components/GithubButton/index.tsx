import * as React from "react";

export const GithubButton = (props: { link: string, children?: string }) => (
  <label>{props.children}<a href={props.link}><img height="24" src="/GitHub-Mark-64px.png" /></a></label>
);
