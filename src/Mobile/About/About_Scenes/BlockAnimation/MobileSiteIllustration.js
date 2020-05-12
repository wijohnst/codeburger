import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants= {
  start: {
    opacity: 0
  },
  end:{
    opacity: 1
  }

}
const PageWrapper = styled(motion.div)`
    background-color: transparent;
    border-radius: 5px;
    padding: 7px;
    position: relative;
    top: -60px;
    margin: 0 auto;
    height: 50vh;
    overflow: hidden;
  `

const CodeBurger = styled.iframe`
  width: 100%;
  height: 100%;
  background-color: white;
  transform: scale(.70);
  border: none;
`
export default function MobileSiteIllustration() {
  
  return (
    <PageWrapper
      variants={variants}
      initial={'start'}
      animate={['start','end']}
      transition={{duration: 2, ease: 'easeInOut'}}
    >
      <CodeBurger title='CodeBurger' src="https://www.code-burger.com" />
    </PageWrapper>
  )
}

