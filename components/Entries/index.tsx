import styled from "styled-components";

export const Entries = (props: { children: any }) => (
  <ul>
    {props.children}
  </ul>
);

const StyledList = styled.li`
  margin: 0.5rem;
`;

export const Entry = (props: { children: any }) => (
  <StyledList>{props.children}</StyledList>
);
