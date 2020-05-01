import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
color: white;
`

const Text = styled(motion.h3)``

export default function Heading(props) {
  
  let {displayText} = props;

  return (
    <Wrapper>
      <Text>{displayText}</Text>
    </Wrapper>
  )
}
