import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Block from './Block'

const BlocksWrapper = styled(motion.div)``

export default function FallingBlocks({advanceScene}) {
  
  return (
    <BlocksWrapper>
      <Block color={'#23BC6A'}  text={'HTML'} shape={'triangle'} delay={4} advanceScene={advanceScene}/>
      <Block color={'#BC2423'}  text={'CSS'} shape={'circle'}  delay={3}/>
      <Block color={'#FCEE21'}  text={'JavaScript'}  shape={'square'} delay={2} />
    </BlocksWrapper>
  )
}
