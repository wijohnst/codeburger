import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function BurgerLogo() {     
  const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Cabin', sans-serif;
  text-align: center;
  opacity: 0;
`

const TopBun = styled(motion.div)`
  height: 2.5vh;
  width: 10vw;
  background-color: #754C24;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
  opacity: 0
`
const BottomBun = styled(motion.div)`
  height: 2.5vh;
  width: 10vw;
  background-color: #754C24;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
  opacity: 0;
`
const Lettuce = styled(motion.div)`
  height: 1vh;
  width: 10vw;
  background-color: #23BC6A;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
`
const Tomato = styled(motion.div)`
  height: 1vh;
  width: 10vw;
  background-color: #BC2423;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
  opacity: 0;
`
const Cheese = styled(motion.div)`
  height: 1vh;
  width: 10vw;
  background-color: #FCEE21;
  margin: 5px;
  opacity: 0;
  border-radius: 5px 5px 5px 5px;
`
const Burger = styled(motion.div)`
  height: 1vh;
  width: 10vw;
  background-color: #534741;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
`
return (
  <PageWrapper animate={{opacity: 1}} transition={{ease: "easeIn", duration: 3}}>
    <TopBun/>
    <Lettuce />
    <Tomato />
    <Cheese />
    <Burger />
    <BottomBun />
  </PageWrapper>
)
}

