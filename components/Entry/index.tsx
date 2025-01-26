import styled from "styled-components";

const StyledList = styled.li`
  margin: 0.5rem;
`;

export const Entry = (props: { children: any }) => <StyledList>{props.children}</StyledList>;
