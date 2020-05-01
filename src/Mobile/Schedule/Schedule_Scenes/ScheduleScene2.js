import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Image from '../../../Image'
import TwitchLogo from './twitch_logo.png'
import YouTubeLogo from './youtube_logo.png'

const SceneWrapper= styled(motion.div)`
  background-color: #FFCECE;
  width: 100%;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`

export default function ScheduleScene2() {
  return (
    <SceneWrapper>
      <Image>
        <img src={TwitchLogo} alt={'Twitch.com'} />
      </Image>
      <p>Live streams are recorded on Mondays and Wednesdays.</p>
      <Image>
        <img src={YouTubeLogo} alt={'YouTube.com'} />
      </Image>
      <p> YouTube tutorials are posted the next day.</p>
    </SceneWrapper>
  )
}
