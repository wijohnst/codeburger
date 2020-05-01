import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import TransformBlock from './TransformBlock'

const BlocksWrapper = styled(motion.div)``

export default function SlidingBlocks({advanceScene}) {
  
  return (
    <BlocksWrapper>
      <TransformBlock color={'#23BC6A'} shadow={'full'} text={'HTML'} shape={'triangle'} delay={5} advanceScene={advanceScene}/>
      <TransformBlock color={'#BC2423'} shadow={'half'} text={'CSS'} shape={'circle'}  delay={4}/>
      <TransformBlock color={'#FCEE21'} shadow={'half'} text={'JavaScript'}  shape={'square'} delay={3} />
    </BlocksWrapper>
  )
}
