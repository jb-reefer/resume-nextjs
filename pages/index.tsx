import React from 'react'
import styled from 'styled-components'
import { Education } from '../components/Education'
import { Entry } from '../components/Entries'
import { ExperienceBlock } from '../components/ExperienceBlock'
import { GithubButton } from '../components/GithubButton'
import { Hero } from '../components/Hero'
import data from '../data'

const StyledContainer = styled.div`
  margin: 2%;
  padding: 1%;
  font-size: 18pt;

  @media (max-width: 375px) {
      font-size: 13pt;
  }
`;

const StyledForkMe = styled.div`
  text-align: center;
  font-size: small;
  width: 100%;
`;

export default function Home() {
  return (
    <StyledContainer id='test'>
      <Hero />
      <br />
      {data.map((job) => (
        <ExperienceBlock {...job} />
      ))}
      <br />
      <Education />
      <StyledForkMe>
        <GithubButton link="https://github.com/jb-reefer/resume-nextjs" /> source for this site :)
      </StyledForkMe>
    </StyledContainer>
  )
}
