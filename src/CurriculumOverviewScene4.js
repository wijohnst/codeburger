import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SiteBlocks from './SiteBlocks'

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

const ContinueWrapper = styled(motion.div)`
text-align: center;
opacity: 0;
`

export default function CurriculumOverviewScene4({advanceScene}) {
  
  return (
    <PageWrapper>
      <TextWrapper>
        When combined, these technologies create a website.
      </TextWrapper>
      <BlocksWrapper>
        <SiteBlocks />
      </BlocksWrapper>
      <ContinueWrapper
        animate={{opacity: 1}}
        transition={{delay: 3, duration: 1, ease: 'easeIn'}}
        onClick={advanceScene}
      > Continue? </ContinueWrapper>
    </PageWrapper>
  )
}
