import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'



export default function Label(props) {

  let {displayText, align} = props;
  
  const LabelWrapper = styled(motion.div)`
  text-align: ${align};
  opacity: 0;
  `
  return(
    <LabelWrapper animate={{opacity: 1}} transition={{ duration: 1, ease:'easeIn'}}>
      <h2>{displayText}</h2>
    </LabelWrapper>
  )
}
 

