import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { getPath } from '../../../../Utils/utilities'

const TextWrapper = styled.div`
    position: relative;
    top: 45%;
  `
 const ShadowFilter = styled.div`
    filter: drop-shadow((5px 5px 12px #707070));
  `
  const BlockWrapper = styled(motion.div)`
    height: 150px;
    text-align: center;
  `  

export default function MobileSiteBlock(props) {
  
  const {color, text, shape, advanceScene} = props; 

  let variants;

  switch (shape) {
  case 'triangle':
      variants={
        start:{
          width: '150px',
          backgroundColor: `${color}`,
          borderRadius: '5px 5px 5px 5px',
          clipPath: getPath('triangle')
        },
        end:{
          color: `${color}`,
          y: 150,
          zIndex: -1,
          opacity: 0,
          // clipPath: getPath('square')
        }
      }
      break;
  case 'square':
      variants={
        start:{
          width: '150px',
          backgroundColor: `${color}`,
          borderRadius: '5px 5px 5px 5px',
          clipPath: getPath('square')
        },
        end:{
          color: '#707070',
          backgroundColor: '#707070',
          y: -150,
          zIndex: -1,
          opacity: 0
        }
      }
      break;
  case 'circle':
      variants={
        start:{
          width: '150px',
          borderRadius: '5px 5px 5px 5px',
          backgroundColor: `${color}`,
          clipPath: getPath('circle')
        },
        end:{
          color: `${color}`,
          opacity: 0
        }
      }
      break;
      default:
        break;
  }

  return (
    <React.Fragment>
    <ShadowFilter>
        <BlockWrapper
          variants={variants}
          initial={'start'}
          animate={['start','end']}
          transition={{duration: 2, ease:'easeInOut'}}
          onAnimationComplete={advanceScene}
        >
          <TextWrapper>
            <b>{text}</b>
          </TextWrapper>
      </BlockWrapper>
    </ShadowFilter>
    </React.Fragment>
  )
}
