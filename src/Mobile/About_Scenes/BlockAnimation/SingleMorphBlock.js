import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MobileSiteIllustration from './MobileSiteIllustration'

export default function SingleMorphBlock() {
  

  const variants={
    start:{
      height: '450px',
      width: '250px',
      opacity: 0
    },
    end:{
      opacity: 1,
      transition:{
        duration: 1,
        ease: 'easeIn'
      }
    }
  }
  
  const BlockWrapper = styled(motion.div)`
    margin: 0 auto;
    /* background-color: #707070; */
    border-radius: 5px 5px 5px 5px;
    padding: 5px;
    margin-bottom: 10px;
  `

  
  return (
    <React.Fragment>
    <BlockWrapper
      variants={variants}
      initial={'start'}
      animate={['start', 'end']}
    >
      <MobileSiteIllustration />
    </BlockWrapper>
    </React.Fragment>
  )
}
