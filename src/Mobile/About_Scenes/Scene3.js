import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ClosedSign from '../../ClosedSign'

import WillProfile2 from '../../WillProfile2'

const SignWrapper = styled.div`
  margin: 0 auto;
`
const PageWrapper = styled.div`
  margin-top: 10px;
  background-color: lightgreen;
  box-shadow: 5px 5px 12px #707070;
  text-align: center;
  padding: 5px;
`

export default function Scene3() {
  return (
    <React.Fragment>
    <SignWrapper>
      <ClosedSign />
    </SignWrapper>
    <PageWrapper>
      <p>
        Restaurants are closed across the country, leaving millions of people
        without a job. 
    </p>
    <p>
        I wanted to make the most of my own newfound free time so I put together
        CodeBurger - a free-to-use, restaurant-focused program for learning introductory web design.
    </p>
    </PageWrapper>
    </React.Fragment>
  )
}
