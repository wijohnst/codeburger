import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Heading(props) {
  
  let {displayText} = props;

  const Wrapper = styled(motion.div)`
    color: white;
  `

  const Text = styled(motion.h3)``

  return (
    <Wrapper>
      <Text>{displayText}</Text>
    </Wrapper>
  )
}
