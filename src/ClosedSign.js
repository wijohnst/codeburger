import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SignWrapper = styled.div`
filter: drop-shadow(2px 5px 5px #707070);
`

const SignBackground = styled(motion.div)`
background-color: black;
width: 100px;
height: 100px;
border-radius: 5px 5px 5px 5px;
clip-path: polygon(50% 0%, 100% 32%, 100% 100%, 0% 100%, 0% 33%);
`

const SignForeground = styled.div`
background-color: #BC2423;
border-radius: 5px 5px 5px 5px;
width: 90px;
height: 55px;
position: relative;
bottom: -10px;
left: 5px;
`

const SignTriangle = styled.div`
background-color: #23BC6A;
width: 90px;
height: 30px;
position: relative;
top: 5px;
left: 5px;
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`

const Text = styled.div`
height: 100%;
display: flex;
font-weight: 400;
color: #FCEE21;
justify-content: center;
align-items: center;
font-family: cursive;
flex-wrap: wrap;
/* background-color: lightpink; */
`

const ArialSpan = styled.span`
font-family: Arial, Helvetica, sans-serif;
font-size: 12px;
margin-left: 5px;
`

const ImpactSpan = styled.span`
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
` 
export default function ClosedSign() {
  
  return (
    <SignWrapper>
    <SignBackground animate={{rotate: [0, 1, 2, 3, 4, 3, 2, 1, 0, -1, -2, -3, -2, -1, 0]}} transition={{ duration: 3, ease: 'easeInOut', loop: Infinity}}>
      <SignTriangle />
      <SignForeground>
        <Text><u>Sorry</u><ArialSpan>We're</ArialSpan><ImpactSpan> CLOSED </ImpactSpan></Text>
      </SignForeground>
    </SignBackground>
    </SignWrapper>
  )
}
