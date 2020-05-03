import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Image from '../../../Image'
import ServingHuman from '../serving_human.png'
import SignUpForm from './SignUpForm'

const SceneWrapper= styled(motion.div)`
  background-color: #957F73;
  width: 100%;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  overflow: hidden;
  text-align: center;
`
export default function JoinScene1() {
  return (
    <SceneWrapper>
      <p>Ready to join? Sign-up below to be added to our email service and never miss a CodeBurger update.</p>
      <Image>
        <img src={ServingHuman} alt={'Human serving'} />
      </Image>
      <SignUpForm />
    </SceneWrapper>
  )
}
