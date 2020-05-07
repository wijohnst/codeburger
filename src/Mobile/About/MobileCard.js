import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MobileCardWrapper = styled(motion.div)`
display: flex;
flex-direction: column;
padding: 10px;
`
export default function MobileCard(props) {
  
  const { isOpen, color } = props;

  const variants = {
    open:{
      height: '100%',
      overflow: 'scroll'
    },
    closed:{
      height: '12vh',
      overflow: 'hidden'
    }
  }
  
  return (
    <MobileCardWrapper
      style={{backgroundColor: color}}
      variants={variants}
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      transition={{duration: 1, ease: 'easeInOut'}}
    >
      {props.children}
    </MobileCardWrapper>
  )
}
