import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function SiteBlock(props) {
  
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
          opacity: 0
        },
        end:{
         
        }
      }
      break;
      case 'square':
        variants ={
          start:{
            opacity: 0
          },
          end:{
           
          }
        }
        break;
        case 'circle':
          variants ={
            start:{
              color: `${color}`
            },
            end:{
              scaleX: 4,
              scaleY: 2.5
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
          transition={{delay: .5, duration: 1, ease:'easeIn'}}
        >
          <TextWrapper>
            {props.children}
          </TextWrapper>
      </BlockWrapper>
    </ShadowFilter>
  )
}
