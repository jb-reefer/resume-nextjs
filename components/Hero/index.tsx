import styled from "styled-components";
import { GithubButton } from "../GithubButton";

const StyledHero = styled.address`
display: flex;
flex-direction: column;
text-align: center;
font-style: normal;

h1 {
  margin: 0;
}

.Contacts > * {
  padding: 1rem;
}
`;

export const Hero = (props: any) => (
  <StyledHero>
    <h1 title="Really it's James Brooks Gardner Reefer but this is so much simpler">J.B. Reefer</h1>
    <div>New York, NY 10128</div>
    <div>(573) 308-2658</div>
    <div className="Contacts">
      <GithubButton link="https://github.com/jb-reefer" />
      <a href="mailto:james.reefer@gmail.com?subject=Let's be friends!">Email</a>
    </div>
  </StyledHero>
);
