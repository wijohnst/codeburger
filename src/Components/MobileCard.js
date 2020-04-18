import React from 'react'
import styled from 'styled-components'
import { motion, useCycle, AnimatePresence } from 'framer-motion'

export default function MobileCard(props) {
  
  const [isOpen, cycleIsOpen] = useCycle(false, true);

  const {backgroundColor, children} = props;

  const variants = {
    closed:{
      height: '15%'
    },
    open:{
      height: '100%'
    }
  }

  const visVariants ={
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1
    }
  }
  const MobileCardWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: ${backgroundColor};
    height: 20%;
    overflow: hidden;
  `
  const ContentWrapper = styled(motion.div)`
    opacity: 0;

  `
  return (
    <MobileCardWrapper
      variants={variants}
      initial={isOpen ? 'closed' : 'open'}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }
    }
      onClick={() =>{
        cycleIsOpen()
      }}
      
    >
      <ContentWrapper
        variants={visVariants}
        // initial={isOpen ? 'hidden' : 'visible'}
        animate={isOpen ? 'visible' : 'hidden'}
      >
        {children}
      </ContentWrapper>
    </MobileCardWrapper>
  )
}
