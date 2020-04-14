import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import AdvancePageButton from './AdvancePageButton'
import ProfilePicture from './ProfilePicture'
import WillHistory from './WillHistory'

export default function WillProfile({advancePage}) {
  
  const ProfileWrapper = styled(motion.div)`
    /* background-color: lightpink; */
  `
  const ProfilePictureWrapper = styled(motion.div)`
    opacity: 0;
  `
  const HistoryWrapper = styled(motion.div)`
    opacity: 0;
    width: 75%;
    margin: 0 auto;
  `
  const ButtonWrapper = styled(motion.div)`
    opacity: 0;
  `
  return (
    <ProfileWrapper>
      Hi! I'm Chef Will. 
      <ProfilePictureWrapper
        animate={{opacity: 1}}
        transition={{delay: 2, duration: 1, ease:'easeIn'}}
      >
        <ProfilePicture />
      </ProfilePictureWrapper>
      <HistoryWrapper
        animate={{opacity: 1}}
        transition={{delay: 4, duration: 1, ease:'easeIn'}}>
        <WillHistory />
      </HistoryWrapper>
      <ButtonWrapper
        animate={{opacity: 1}}
        transition={{delay: 8, duration: 1, ease:'easeIn'}}
      >
        <AdvancePageButton advancePage={advancePage} />
      </ButtonWrapper>
    </ProfileWrapper>
  )
}
