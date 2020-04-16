import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MorphBlock from './MorphBlock'

export default function SlidingBlocks({advanceScene}) {
  const BlocksWrapper = styled(motion.div)`
  `
  return (
    <BlocksWrapper>
      <MorphBlock color={'#23BC6A'} shadow={'full'} text={'HTML'} shape={'triangle'} delay={5} />
      <MorphBlock color={'#BC2423'} shadow={'half'} text={'CSS'} shape={'circle'}  delay={4} advanceScene={advanceScene}/>
      <MorphBlock color={'#FCEE21'} shadow={'half'} text={'JavaScript'}  shape={'square'} delay={3} />
    </BlocksWrapper>
  )
}
