import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MapPin from '../../MapPin'
import DifficultyMeter from '../../DifficultyMeter'

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

export default function Scene10({variants}){
  return (
    <PageWrapper
      variants={variants}
      initial={'pre'}
      animate={['pre', 'enter']}
      exit={'exit'}
    >
     <MapPin color={'#BC2423'} pinCenterColor={'white'} />
     <h4><u>JavaScript for Restaurants</u></h4>
     <p>If HTML and CSS are about making the web <i>look like something</i>,
    JavaScript is here to make it <b><i>do something.</i></b> JavaScript is the tool that 
    allows us to create more interactive and dynamic web sites. <b>JavaScript for Restaurants</b> answers the
    question "How can I make my website do more?"</p> 
   <DifficultyMeter status={[true,true,true]} color={'#BC2423'}/>
   <p>Prerequisites: HTML for Restaurants, CSS for Restaurants</p>
  </PageWrapper>
  )
}
