import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Image from '../../../Image'
import PhoneHuman from './phone_human.png'
import ResourceOption from './ResourceOption'

const SceneWrapper= styled(motion.div)`
  background-color: lightyellow;
  width: 100%;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`
const HeadingWrapper = styled.div`
  margin-top: 15px;
  font-size: 1.5em;
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function ResourcesScene1() {
  return (
    <SceneWrapper>
      <HeadingWrapper>Looking for more information on a topic?</HeadingWrapper>
      <Image>
        <img src={PhoneHuman} alt={'Man with phone'} />
      </Image>
      <p>Select an area below for additional learning resources.</p>
      <OptionsWrapper>
        <ResourceOption backgroundColor={'#23BC6A'} text={'HTML'} clipPath={'square'} />
        <ResourceOption backgroundColor={'#FCEE21'} text={'CSS'} clipPath={'triangle'} />
        <ResourceOption backgroundColor={'#BC2423'} text={'JavaScript'} clipPath={'circle'} />
      </OptionsWrapper>
      
    </SceneWrapper>
  )
}
