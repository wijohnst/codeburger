import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Block from './Block'

export default function FallingBlocks() {
  const BlocksWrapper = styled(motion.div)`
    /* background-color: lightgreen; */
  `
  return (
    <BlocksWrapper>
      <Block color={'#23BC6A'} shadow={'full'} text={'HTML'} shape={'triangle'} delay={5} />
      <Block color={'#BC2423'} shadow={'half'} text={'CSS'} shape={'circle'}  delay={4}/>
      <Block color={'#FCEE21'} shadow={'half'} text={'JavaScript'}  shape={'square'} delay={3} />
    </BlocksWrapper>
  )
}
