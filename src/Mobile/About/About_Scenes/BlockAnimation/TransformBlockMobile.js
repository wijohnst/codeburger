import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { getPath } from '../../../../Utils/utilities'

const ShadowFilter = styled.div`
    filter: drop-shadow((5px 5px 12px #707070));
  `
  const BlockWrapper = styled(motion.div)`
    height: 150px;
    width: 150px;
    text-align: center;
    border-radius: 5px 5px 5px;
  `
  const TextWrapper = styled.div`
  position: relative;
  top: 45%;
`
export default function TransformBlock(props) {
  
  const {color, text, shape, advanceScene} = props; 

  let variants;

  switch (shape) {
    case 'triangle':
      variants ={
        start:{
         clipPath: getPath(shape)
        },
        end:{
          // clipPath: getPath('square')
        }
      }
      break;
      case 'square':
        variants ={
          start:{
            clipPath: getPath(shape)
          },
          end:{
            // clipPath: getPath('square')
          }
        }
        break;
        case 'circle':
          variants ={
            start:{
              clipPath: getPath(shape)
            },
            end:{
              // clipPath: getPath('square')
            }
          }
          break;
  
    default:
      break;
  }

  return (
    <ShadowFilter>
        <BlockWrapper
          style={{backgroundColor : color}}
          variants={variants}
          initial={'start'}
          animate={['start','end']}
          transition={{delay: 1, duration: 1, ease:'easeIn'}}
          onAnimationComplete={advanceScene}
        >
          <TextWrapper>
            <b>{text}</b>
          </TextWrapper>
      </BlockWrapper>
    </ShadowFilter>
  )
}
