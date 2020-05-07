import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SlidingBlocksMobile from './BlockAnimation/SlidingBlocksMobile'
import MobileSiteBlocks from './BlockAnimation/MobileSiteBlocks'
import SingleMorphBlock from './BlockAnimation/SingleMorphBlock'

const PageWrapper = styled.div`
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  padding: 5px;
`
const BlocksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Scene6({variants}) {

  const [sceneNumber, setSceneNumber] = useState(0);
    
  const advanceScene = () =>{
    setSceneNumber(sceneNumber + 1);
  }
    if(sceneNumber === 0){
      return (
        <PageWrapper>
          <p>When combined, these technologies create a website.</p>
          <BlocksWrapper>
            <SlidingBlocksMobile advanceScene={advanceScene} /> 
          </BlocksWrapper>
        </PageWrapper>
      )
    }else if(sceneNumber === 1){
      return(
        <PageWrapper>
          <motion.p>When combined, these technologies create a website.</motion.p>
          <BlocksWrapper>
            <MobileSiteBlocks advanceScene={advanceScene}/>
          </BlocksWrapper>
        </PageWrapper>
      )
    }else if(sceneNumber === 2){
      return(
        <PageWrapper>
          <p>When combined, these technologies create a website.</p>
          <SingleMorphBlock />
        </PageWrapper>
      )
    }  
}
