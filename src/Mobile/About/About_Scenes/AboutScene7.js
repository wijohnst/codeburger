import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MapGuy from '../../../map_guy.png'
import Image from '../../../Image'

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
const Heading = styled.div`
  font-size: 2em;
`

export default function Scene7({variants}){
  return (
    <PageWrapper
      variants={variants}
      initial={'pre'}
      animate={['pre', 'enter']}
      exit={'exit'}
    >
     <Heading>
      Course Road Map
     </Heading>
     <Image>
      <img src={MapGuy} alt={'Map Guy'}/>
     </Image>
     <p>CodeBurger is designed to be the first resource on your coding journey. And what's a journey
          without a map? This is a brief outline of what we'll be covering- don't worry if it doesn't all make sense now.
          Just remember that CodeBurger is designed with the beginner in mind. <i>If that's you</i>, just start with the first lesson
          in Course One! </p>
    </PageWrapper>
  )
}
