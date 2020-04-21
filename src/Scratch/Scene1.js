import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

export default function Scene1({variants}) {
  
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
        Scene 1
      </SceneWrapper>
    </AnimatePresence>
  )
}
