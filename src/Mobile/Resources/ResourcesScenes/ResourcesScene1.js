import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Image from '../../../Image'
import PhoneHuman from './phone_human.png'
import ResourceOption from './ResourceOption'

const SceneWrapper= styled(motion.div)`
  background-color: lightyellow;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 5px 5px 12px rgba(0,0,0,.7);
  text-align: center;
  overflow: hidden;
`
// const HeadingWrapper = styled.p`
//   /* margin-top: 15px; */
//   font-size: 1.5em;
// `

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function ResourcesScene1(props) {
  
  const {handleClick} = props;
  return (
    <AnimatePresence>
    <SceneWrapper>
      <p>Looking for more information on a topic?</p>
      <Image>
        <img src={PhoneHuman} alt={'Man with phone'} />
      </Image>
      <p>Select an option below for additional resources.</p>
      <OptionsWrapper>
        <ResourceOption backgroundColor={'#23BC6A'} 
                        text={'HTML'} 
                        clipPath={'square'} 
                        handleClick={handleClick} 
                        />
        <ResourceOption backgroundColor={'#FCEE21'} 
                        text={'CSS'} 
                        clipPath={'triangle'} 
                        handleClick={handleClick} 
                        />
        <ResourceOption backgroundColor={'#BC2423'} 
                        text={'JavaScript'} 
                        clipPath={'circle'} 
                        handleClick={handleClick}  
                        />
      </OptionsWrapper>
    </SceneWrapper>
    </AnimatePresence>
  )
}
