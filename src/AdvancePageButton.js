import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function AdvancePageButton({advancePage}) {
  
  const Button = styled(motion.div)`
    margin-top: 10px;
    opacity: 0;
    &:hover{
      color: white;
    }
  `
  return (
    <Button onClick={advancePage} animate={{opacity: 1}} transition={{delay: 5, duration: 1, ease:'easeIn'}} >
      Continue?
    </Button>
  )
}
