import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ClosedSign from './ClosedSign'
import AdvancePageButton from './AdvancePageButton'

const ProfileWrapper = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TextWrapper = styled(motion.div)`
 opacity: 0;
`
const Text2Wrapper=styled(motion.div)`
 opacity: 0;
 max-width: 50%;
 text-align: center;
`
const ButtonWrapper = styled(motion.div)`
opacity: 0;
`

export default function WillProfile2({advancePage}) {
  
  return (
    <ProfileWrapper>
      <ClosedSign />
      <p>Restaurants are closed around the country.</p>
      <TextWrapper
      animate={{opacity: 1}}
      transition={{delay: 3, duration: 1, ease:'easeIn'}}
      >
        <p>Countless service industry professionals are out of work.</p>
      </TextWrapper>
      <Text2Wrapper
      animate={{opacity: 1}}
      transition={{delay: 5, duration: 1, ease:'easeIn'}}
      >
        <p>In an attempt to do something positive with this newfound free time, I put together CodeBurger- a free-to-use, restaurant-focused program for learning introductory web design.</p>
      </Text2Wrapper> 
      <ButtonWrapper
       animate={{opacity: 1}}
       transition={{delay: 8, duration: 1, ease:'easeIn'}} 
      >
        <AdvancePageButton advancePage={advancePage} />
      </ButtonWrapper>
    </ProfileWrapper>
  )
}
