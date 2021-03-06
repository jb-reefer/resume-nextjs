import React from "react";

export const Entries = (props: { children: any }) => (
  <ul className="Entries">
    {props.children}
  </ul>
);

export const Entry = (props: { children: any }) => (
  <li style={{margin: "0.5rem" }}>{props.children}</li>
);
