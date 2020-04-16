import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SignPost from './signpost.png'
import Human from './roadmap_human.png'
import Image from './Image'
import RoadMap from './RoadMap'

export default function CurriculumOverviewScene5() {
  
  const BackgroundWrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(8 1fr);
    grid-template-rows: repeat(8 1fr);
    grid-template-areas:
    'p p . . . . . .'
    'p p . . . . . .'
    'c c c c c c c c'
    'c c c c c c c c'
    'c c c c c c c c'
    'c c c c c c c c'
    '. . . . . . s s'
    '. . . . . . s s';
  `

  const PWrapper = styled(motion.div)`
    opacity: 0;
    /* background-color: lightpink; */
    grid-area: p;
  `
  const CWrapper = styled(motion.div)`
    opacity: 0;
    /* background-color: lightgreen; */
    grid-area: c;
    padding: 10px;
  `

  const SWrapper = styled(motion.div)`
    opacity: 0;
    /* background-color: lightyellow; */
    grid-area: s;
  `
  
  return (
    <BackgroundWrapper>
    <PWrapper
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 1, ease: 'easeIn'}}
    >
      <Image>
        <img src={Human} alt={'Person Searching'} />
      </Image>
    </PWrapper>
    <CWrapper
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 3, ease: 'easeIn'}}
    >
      <RoadMap /></CWrapper>
    <SWrapper
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 2, ease: 'easeIn'}}
    > 
      <Image>
        <img src={SignPost} alt={'Sign Post'} />
      </Image>
    </SWrapper>
    </BackgroundWrapper>
  )
}
