import React from "react";
import styled from "styled-components";

export const Entries = (props: { children: any }) => (
  // <ul className="Entries"> // TODO: this CSS appears unused
  <ul className="Entries">
    {props.children}
  </ul>
);

const StyledList = styled.li`
  margin: 0.5rem;
`;

export const Entry = (props: { children: any }) => (
  <StyledList>{props.children}</StyledList>
);
