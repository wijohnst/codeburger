import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import ProfilePicture from '../../ProfilePicture'
import WillHistory from '../../WillHistory'
export default function Scene2({variants}) {
  
  const SceneWrapper= styled(motion.div)`
    background-color: lightgreen;
    width: 100%;
    box-shadow: 5px 5px 12px #707070;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px;
  `

  return (
  <AnimatePresence>
    <SceneWrapper
    variants={variants}
    initial={'pre'}
    animate={['pre', 'enter']}
    exit={'exit'}
    >
      <p>Hi! I'm Chef Will.</p>
      <ProfilePicture />
      <WillHistory textAlign={'center'}/>
    </SceneWrapper>
  </AnimatePresence>
  )
}
