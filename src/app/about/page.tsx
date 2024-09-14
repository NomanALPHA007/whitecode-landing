import { AboutHero, AboutMission, AboutValues, Chat, Map, Story } from '@/sections'
import React from 'react'

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <Story />
      <AboutValues />
      <Map />
      <Chat />
    </main>
  )
}

export default About