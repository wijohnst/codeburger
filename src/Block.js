import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Block(props) {
  
  const {color, shadow, text, shape, delay} = props; 

  const ShadowFilter = styled.div`
    filter: drop-shadow((5px 5px 12px #707070));
  `
  const BlockWrapper = styled(motion.div)`
    height: 200px;
    width: 200px;
    text-align: center;
    background-color: ${color};
    border-radius: 5px 5px 5px;
    clip-path: ${() =>{
    switch (shape) {
      case 'triangle':
        return(
          'polygon(50% 0%, 0% 100%, 100% 100%)'
        )
      case 'circle':
        return(
          'circle(50% at 50% 50%)'
        )
      default:
        break;
    }
   }
  };
  `
  const variants={
    start:{
      y: -800,
    },
    end:{
      y: 0,
      transition:{
        type: 'spring',
        delay: `${delay}`,
        duration: 1,
        stiffness: 50,
        ease: 'easeInOut'
      }
    }
  }
  const TextWrapper = styled.div`
    position: relative;
    top: 50%;
  `
  return (
    <ShadowFilter>
        <BlockWrapper
          variants={variants}
          initial={'start'}
          animate={['start','end']}
        >
          <TextWrapper>
            <b>{text}</b>
          </TextWrapper>
      </BlockWrapper>
    </ShadowFilter>
  )
}
