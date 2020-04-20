import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function MobileCard2(props) {
  
  const { isOpen, color } = props;

  const variants = {
    open:{
      height: '50vh',
      overflow: 'scroll'
    },
    closed:{
      height: '12vh',
      overflow: 'scroll'
    }
  }
  
  const MobileCardWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: ${color};
    padding: 10px;
    
  `

  return (
    <MobileCardWrapper
      variants={variants}
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      transition={{duration: 1, ease: 'easeInOut'}}
    >
      {props.children}
    </MobileCardWrapper>
  )
}
