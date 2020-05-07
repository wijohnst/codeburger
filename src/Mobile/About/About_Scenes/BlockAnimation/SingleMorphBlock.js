import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MobileSiteIllustration from './MobileSiteIllustration'

const BlockWrapper = styled(motion.div)`
    margin: 0 auto;
    border-radius: 5px 5px 5px 5px;
    padding: 5px;
    margin-bottom: 10px;
  `

export default function SingleMorphBlock({shape, color}) {
  
  let variants;
  
  switch (shape) {
  case 'triangle':
      variants={
        start:{
          width: '150px',
          backgroundColor: `${color}`,
          borderRadius: '5px 5px 5px 5px',
        },
        end:{
          color: `${color}`,
          y: 150,
          zIndex: -1,
          opacity: 0
        }
      }
      break;
  case 'square':
      variants={
        start:{
          width: '150px',
          backgroundColor: `${color}`,
          borderRadius: '5px 5px 5px 5px'
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
    <BlockWrapper
      variants={variants}
      initial={'start'}
      animate={['start', 'end']}
    >
      <MobileSiteIllustration />
    </BlockWrapper>
    </React.Fragment>
  )
}
