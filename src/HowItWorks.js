import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import HowItWorksContent from './HowItWorksContent'

const HowItWorksWrapper = styled(motion.div)`
padding: 10px;
border-radius: 5px 5px 5px 5px;
box-shadow: 5px 5px 12px #707070;
margin: 0 auto;
background-color: white;
height: 90%;
overflow: scroll;
`
const ContentWrapper = styled(motion.div)`
opacity: 0;
margin: 0 auto;
`

export default function HowItWorks({advancePage}) {
  
 const mainWrapperVariants={
    start:{
      opacity: 0,
      width: -10,
      height: -10,
    },
    end:{
      opacity: 1,
      scale: 1,
      width: '75%',
      height: '100vh',
      transition:{
        delay: 1,
        duration: 1,
        ease: 'easeIn'
      }
    }
  }

  return (
    <HowItWorksWrapper
      variants={mainWrapperVariants}
      initial={'start'}
      animate={['start','end']}
    >
      <ContentWrapper
        animate={{opacity: 1}}
        transition={{delay: 2, duration: 1, ease:'easeIn'}}
      >
        <HowItWorksContent advancePage={advancePage}/>
      </ContentWrapper>
    </HowItWorksWrapper>
  )
}
