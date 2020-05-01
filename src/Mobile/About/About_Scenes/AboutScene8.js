import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MapPin from '../../../MapPin'
import DifficultyMeter from '../../../DifficultyMeter'

const PageWrapper = styled(motion.div)`
  background-color: lightgreen;
  box-shadow: 5px 5px 12px #707070;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  overflow-y: scroll;
`

export default function Scene8({variants}){
  return (
    <PageWrapper
      variants={variants}
      initial={'pre'}
      animate={['pre', 'enter']}
      exit={'exit'}
    >
     <MapPin color={'#1D9D58'} pinCenterColor={'lightgreen'}/>
     <h4><u>HTML for Restaurants</u></h4>
     <p>If a website was a house, HTML would be the foundation, so it makes sense that this
     is where we would start. <b>HTML for Restaurants</b> is an overview of <i>hypertext
     markup language</i>, the OG of web design. This course will answer the question "How do I design,
     code, post a simple website?"</p>
     <DifficultyMeter status={[true,false,false]} color={'#1D9D58'}/>
     <p>Prerequisites: None</p>
    </PageWrapper>
  )
}
