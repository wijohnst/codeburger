import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import NumberCircle from './NumberCircle'

const SceneWrapper= styled(motion.div)`
  background-color: #FFCECE;
  display: flex;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin-bottom: 10px;
`

const Heading = styled(motion.div)`
  font-size: 1.5em;
  font-weight: 300;
`
const InfoWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BodyTextWrapper = styled(motion.div)`
  padding: 5px;
  max-width: 70%;
`
const BodyTextHeader = styled(motion.p)`
  font-size: 1.25em;
`
const BodyText = styled(motion.div)`
`

export default function ScheduleScene1(props) {
  
  const {variants} = props;

  return (
  <AnimatePresence>
      <SceneWrapper
        key="sceneWrapper2"
        variants={variants}
        initial='enter'
        animate={['pre', 'enter']}
        exit='exit'
        >
        <p>You've got two options for viewing each CodeBurger lesson.</p>
        <InfoWrapper>
          <NumberCircle color='#1D9D58' fontColor='black'>
            1
          </NumberCircle>
          <BodyTextWrapper>
            <BodyTextHeader><a href="https://www.twitch.tv/codeburgerlive">Follow Along Live</a></BodyTextHeader>
            <BodyText>Each lesson is recorded live and streamed on Twitch.</BodyText>
          </BodyTextWrapper>
        </InfoWrapper>
        <InfoWrapper>
          <NumberCircle color='#FCEE21' fontColor='black'>
          2
          </NumberCircle>
          <BodyTextWrapper>
            <BodyTextHeader>Watch on YouTube</BodyTextHeader>
            <BodyText>Watch an edited version of each live stream on your own time.</BodyText>
          </BodyTextWrapper>
        </InfoWrapper>
    </SceneWrapper>
</AnimatePresence>
  )
}
