import React from 'react'
import styled from 'styled-components'
import { motion , AnimatePresence} from 'framer-motion'

import Image from '../../../Image'
import HtmlBlockHuman from './html_block_human.png'

const SceneWrapper= styled(motion.div)`
  background-color: #FFCECE;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`

export default function ScheduleScene3(props) {
  
  let {variants} = props;

  return (
    <AnimatePresence>
    <SceneWrapper
      key="sceneWrapper"
      variants={variants}
      initial='pre'
      animate={['pre', 'enter']}
      exit='exit'
    >
      <Image>
        <img src={HtmlBlockHuman} alt={'Woman with block'} />
      </Image>
      <p><i>HTML for Restaurants</i>, the first course in the CodeBurger curriculum, goes live on Monday May 11th at 6 PM.</p>
    </SceneWrapper>
    </AnimatePresence>
  )
}
