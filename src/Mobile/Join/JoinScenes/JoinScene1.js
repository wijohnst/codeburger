import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Image from '../../../Image'
import ServingHuman from '../serving_human.png'

const SceneWrapper= styled(motion.div)`
  background-color: #957F73;
  width: 100%;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  overflow: hidden;
`
export default function JoinScene1() {
  return (
    <SceneWrapper>
      <Image>
        <img src={ServingHuman} alt={'Human serving'} />
      </Image>
    </SceneWrapper>
  )
}
