import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import WillProfile from './will_profile.jpeg'

export default function ProfilePicture() {
  
  const ProfilePictureWrapper = styled.div`
    filter: drop-shadow(2px 2px 12px #707070);
  `
  const ProfilePicture = styled.div`
    display: inline-block;
    background-color: lightpink;
    height: 200px;
    width: 200px;
    clip-path: circle(35% at 51% 51%);;
    text-align: center;
    box-shadow: 2px black;
  `
  return (
    <ProfilePictureWrapper>
      <ProfilePicture>
        <img src={WillProfile} alt={'Profile'}/>
      </ProfilePicture>
    </ProfilePictureWrapper>
  )
}
