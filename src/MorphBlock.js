import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function MorphBlock(props) {
  
  const {color, text, shape, delay} = props; 

  let variants;

  const ShadowFilter = styled.div`
    filter: drop-shadow((5px 5px 12px #707070));
  `
  const BlockWrapper = styled(motion.div)`
    height: 150px;
    width: 150px;
    text-align: center;
    background-color: ${color};
    border-radius: 5px 5px 5px;
  `
 
  switch (shape) {
    case 'triangle':
      variants ={
        start:{
          x: '100%',
          y: '100%'
        },
        end:{
         x: '50%',
         opacity: 0
        }
      }
      break;
      case 'square':
        variants ={
          start:{
            x: '-100%',
            y: '-100%'
          },
          end:{
            x: '-50%',
            opacity: 0
          }
        }
        break;
        case 'circle':
          variants ={
            start:{
              
            },
            end:{
              color: `${color}`
            }
          }
          break;
  
    default:
      break;
  }

  const TextWrapper = styled.div`
    position: relative;
    top: 45%;
  `
  return (
    <ShadowFilter>
        <BlockWrapper
          variants={variants}
          initial={'start'}
          animate={['start','end']}
          transition={{delay: 1, duration: 1, ease:'easeIn'}}
        >
          <TextWrapper>
            <b>{text}</b>
          </TextWrapper>
      </BlockWrapper>
    </ShadowFilter>
  )
}
