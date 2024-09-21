import { AboutHero, AboutMission, AboutValuesNew, Chat, Map, Story } from '@/sections'
import React from 'react'

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <Story />
      <AboutValuesNew />
      <Map />
      <Chat />
    </main>
  )
}

export default About