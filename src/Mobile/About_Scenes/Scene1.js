import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Image from '../../Image'
import AboutImage from '../../about_image.png'


export default function Scene1(props) {
  
  const {variants, components, media} = props;

  console.log(components);
  console.log(media);
  const SceneWrapper= styled(motion.div)`
    /* background-color: lightgreen; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 12px #707070;
  `

  return (
    <AnimatePresence>
      <SceneWrapper
      variants={variants}
      initial={'enter'}
      animate={['pre', 'enter']}
      exit={'exit'}
      >
       <p>Technical Skill Training for Restaurant People.</p>
       <Image>
         <img src={AboutImage} alt={'Chef with Technology'} />
       </Image>
       <p>Taught by a restaurant person.</p>
      </SceneWrapper>
    </AnimatePresence>
  )
}
