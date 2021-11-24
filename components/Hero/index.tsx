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

  .Contacts {
    margin-top: 0.5rem;
  }
`;

export const Hero = (props: any) => (
  <StyledHero>
    <h1 title="Really it's James Brooks Gardner Reefer but this is so much simpler">
      J.B. Reefer
    </h1>
    <div>New York, NY 10128</div>
    <div>(573) 308-2658</div>
    <a href="mailto:jb@jbreefer.nyc?subject=Let's be friends!">
      jb@jbreefer.nyc
    </a>
    <div className="Contacts">
      <GithubButton link="https://github.com/jb-reefer" />
    </div>
  </StyledHero>
);
