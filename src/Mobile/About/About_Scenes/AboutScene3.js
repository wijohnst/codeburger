import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import ClosedSign from './ClosedSign'

const PageWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px;
`
const SignWrapper = styled.div`
  margin: 0 auto;
`
const TextWrapper = styled.div`
  margin-top: 10px;
  background-color: lightgreen;
  box-shadow: 5px 5px 12px #707070;
  text-align: center;
  padding: 5px;
`

export default function Scene3({variants}) {
  return (
    <AnimatePresence>
    <PageWrapper
      variants={variants}
      initial={'pre'}
      animate={['pre','enter']}
      exit={'exit'}
    >
    <SignWrapper>
      <ClosedSign />
    </SignWrapper>
    <TextWrapper>
      <p>
        Restaurants are closed across the country, leaving millions of people
        without a job. 
    </p>
    <p>
        I wanted to make the most of my own newfound free time so I put together
        CodeBurger - a free-to-use, restaurant-focused program for learning introductory web design.
    </p>
    </TextWrapper>
    </PageWrapper>
    </AnimatePresence>
  )
}
