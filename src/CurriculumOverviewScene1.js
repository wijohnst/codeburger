import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import FallingBlocks from './FallingBlocks'
export default function CurriculumOverviewScene1() {
  
  const PageWrapper = styled.div`
    background-color: 'white';
  `
  
  const TextWrapper = styled.div`
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
  `

  const BlocksWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
  `

  return (
    <PageWrapper>
      <TextWrapper>
        CodeBurger covers the 3 core technologies of modern web design: HTML, CSS, and JavaScript.
      </TextWrapper>
      <BlocksWrapper>
        <FallingBlocks />
      </BlocksWrapper>
    </PageWrapper>
  )
}
