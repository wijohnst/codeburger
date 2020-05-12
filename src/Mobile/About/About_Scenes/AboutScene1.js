import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Image from '../../../Image'
import AboutImage from './about_image.png'

const SceneWrapper= styled(motion.div)`
background-color: lightgreen;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px 5px 12px #707070;
`

export default function AboutScene1(props) {
  
  const {variants} = props;

  return (
    <AnimatePresence>
      <SceneWrapper
      key="sceneWrapper"
      variants={variants}
      initial='enter'
      animate={['pre', 'enter']}
      exit='exit'
      >
       <p>Web design skills.</p>
       <Image>
         <img src={AboutImage} alt={'Chef with Technology'} />
       </Image>
       <p>For the Service Industry.</p>
      </SceneWrapper>
    </AnimatePresence>
  )
}
