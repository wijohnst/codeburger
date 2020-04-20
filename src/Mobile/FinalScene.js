import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

export default function FinalScene() {
  
  const variants={
    pre:{
      x: -400,
      opacity: 0
    },
    enter:{
      x: 0,
      opacity: 1,
      transition:{
        duration: 1,
        ease: 'easeInOut'
      }
    },
    exit:{
      x: 400,
      opacity: 0
    }
  }
  const SceneWrapper= styled(motion.div)`
    background-color: lightgreen;
    width: 100%;
    box-shadow: 5px 5px 12px #707070;
  `

  return (
    <AnimatePresence>
      <SceneWrapper
        variants={variants}
        initial={'pre'}
        animate={['pre', 'enter']}
        exit={'exit'}
      >
        Final Scene
      </SceneWrapper>
    </AnimatePresence>
  )
}
