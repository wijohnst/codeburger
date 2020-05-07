import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MobileSiteBlock from './MobileSiteBlock'

const BlocksWrapper = styled(motion.div)``

export default function MobileSiteBlocks({advanceScene}) {
  
  return (
    <BlocksWrapper>
      <MobileSiteBlock color={'#23BC6A'} shadow={'full'} text={'HTML'} shape={'triangle'} delay={5} />
      <MobileSiteBlock color={'#BC2423'} shadow={'half'} text={'CSS'} shape={'circle'}  delay={4}/>
      <MobileSiteBlock color={'#FCEE21'} shadow={'half'} text={'JavaScript'}  shape={'square'} delay={3} advanceScene={advanceScene}/>
    </BlocksWrapper>
  )
}