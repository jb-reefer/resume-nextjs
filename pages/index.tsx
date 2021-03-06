import Head from 'next/head'
import React from 'react'
import { Education } from '../components/Education'
import { Entry } from '../components/Entries'
import { ExperienceBlock } from '../components/ExperienceBlock'
import { GithubButton } from '../components/GithubButton'
import { Hero } from '../components/Hero'
import data from '../data'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="Container">
      <Hero />
      <br />
      {data.map((job) => (
        <ExperienceBlock {...job}>
          {job.children.map((entry) => <Entry>{entry}</Entry>)}
        </ExperienceBlock>
      ))}
      <br />
      <Education />
      <div className="ForkMe"><GithubButton link="https://github.com/jb-reefer/resume" /> source for this site :)</div>
    </div>
  )
}
