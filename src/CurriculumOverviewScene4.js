import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SiteBlocks from './SiteBlocks'

export default function CurriculumOverviewScene4() {
  
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
      <TextWrapper>
        When combined, these technologies create a website.
      </TextWrapper>
      <BlocksWrapper>
        <SiteBlocks />
      </BlocksWrapper>
    </PageWrapper>
  )
}
