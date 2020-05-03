import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


import Image from '../../../Image'
import RoadMapHuman from '../../../roadmap_human.png'

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
const TextWrapper = styled.div`
  font-size: 1.5em;
`

export default function Scene11({variants}){
  return (
    <PageWrapper
      variants={variants}
      initial={'pre'}
      animate={['pre', 'enter']}
      exit={'exit'}
    >
      <TextWrapper> 
        What's Next?
      </TextWrapper>
      <Image>
        <img src={RoadMapHuman} alt={'Human with a question.'} />
      </Image>
      <p>So that's CodeBurger in a nutshell. When you're ready, click the close button below then click on the <b>Schedule</b> tab to learn how to begin.</p>
  </PageWrapper>
  )
}
