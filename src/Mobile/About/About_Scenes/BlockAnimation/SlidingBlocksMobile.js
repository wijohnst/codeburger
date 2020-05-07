import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import TransformBlockMobile from './TransformBlockMobile'

export default function SlidingBlocksMobile({advanceScene}) {
  const BlocksWrapper = styled(motion.div)`
    /* background-color: lightgreen; */
  `
  return (
    <BlocksWrapper>
      <TransformBlockMobile color={'#23BC6A'} shadow={'full'} text={'HTML'} shape={'triangle'} delay={5} advanceScene={advanceScene}/>
      <TransformBlockMobile color={'#BC2423'} shadow={'half'} text={'CSS'} shape={'circle'}  delay={4}/>
      <TransformBlockMobile color={'#FCEE21'} shadow={'half'} text={'JavaScript'}  shape={'square'} delay={3} />
    </BlocksWrapper>
  )
}