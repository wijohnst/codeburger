import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MapPin from './MapPin'
import DifficultyMeter from './DifficultyMeter'

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

export default function Scene9({variants}){
  return (
    <PageWrapper
      variants={variants}
      initial={'pre'}
      animate={['pre', 'enter']}
      exit={'exit'}
    >
     <MapPin color={'#FCEE21'} pinCenterColor={'white'} />
     <h4><u>CSS for Restaurants</u></h4>
     <p>If HTML is the foundation of our house, CSS is the interior design. <b>CSS for Restaurants </b> 
      builds on what you learned in the first course through the introduction of <i>Cascading Style Sheets</i>. This
      course will answer the question "How do I make my website look great?"</p> 
   <DifficultyMeter status={[true,true,false]} color={'#FCEE21'}/>
   <p>Prerequisites: HTML for Restaurants</p>
  </PageWrapper>
  )
}
