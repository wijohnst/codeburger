import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Image from '../../../Image'
import HtmlBlockHuman from './html_block_human.png'

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

export default function ScheduleScene3() {
  return (
    <SceneWrapper>
      <Image>
        <img src={HtmlBlockHuman} alt={'Woman with block'} />
      </Image>
      <p><i>HTML for Restaurants</i>, the first course in the CodeBurger curriculum, goes live on Monday May 11th at 6 PM.</p>
    </SceneWrapper>
  )
}
