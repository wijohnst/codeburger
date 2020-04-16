import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SlidingBlocks from './SlidingBlocks'

export default function CurriculumOverviewScene2({advanceScene}) {
  
  const PageWrapper = styled.div`
    background-color: 'white';
  `
  
  const TextWrapper = styled(motion.div)`
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    opacity: 1;
  `

  const BlocksWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
  `

  return (
    <PageWrapper>
      <TextWrapper
        animate={{opacity: 1}}
        transition={{duration: 1, ease: 'easeIn'}}
      >
        When combined, these technologies create a website.
      </TextWrapper>
      <BlocksWrapper>
        <SlidingBlocks advanceScene={advanceScene}/>
      </BlocksWrapper>
    </PageWrapper>
  )
}
