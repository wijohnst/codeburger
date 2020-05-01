import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion' 

import SiteBlock from './SiteBlock'
import SiteBlockContent from './SiteBlockContent'

const BlocksWrapper = styled(motion.div)``

export default function SiteBlocks() {

  return (
    <BlocksWrapper>
      <SiteBlock color={'#23BC6A'} shadow={'full'} text={'HTML'} shape={'triangle'} delay={5} />
      <SiteBlock color={'#BC2423'} shadow={'half'} text={'CSS'} shape={'circle'}  delay={4}>
        <SiteBlockContent />
      </SiteBlock>
      <SiteBlock color={'#FCEE21'} shadow={'half'} text={'JavaScript'}  shape={'square'} delay={3} />
    </BlocksWrapper>
  )
}
