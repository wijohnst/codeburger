import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { getPath } from '../../../../Utils/utilities'

export default function TransformBlock(props) {
  
  const {color, text, shape, advanceScene} = props; 

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
 
  switch (shape) {
    case 'triangle':
      variants ={
        start:{
         
        },
        end:{
          clipPath: getPath(shape)
        }
      }
      break;
      case 'square':
        variants ={
          start:{
            
          },
          end:{
            clipPath: getPath(shape)
          }
        }
        break;
        case 'circle':
          variants ={
            start:{
              
            },
            end:{
              clipPath: getPath(shape)
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
          onAnimationComplete={advanceScene}
        >
          <TextWrapper>
            <b>{text}</b>
          </TextWrapper>
      </BlockWrapper>
    </ShadowFilter>
  )
}
