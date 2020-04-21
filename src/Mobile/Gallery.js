import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'

import FinalScene from './FinalScene'




export default function Gallery({scenes}) {
  
  const constraintsRef = useRef(null);
  const positionRef = useRef(null);
  const [sceneNumber, setSceneNumber] = useState(0);
  const nextScene = sceneNumber + 1;
  let x = useMotionValue(0);

  useEffect(() =>{
    
    const parentWidth = constraintsRef.current.getBoundingClientRect().width;

    function updateScene(xPosition){
      if(xPosition >= parentWidth * .15){
        setSceneNumber(nextScene);
      }
    }

    const unsubscribeX = x.onChange(() =>{
      let xPosition = positionRef.current.getBoundingClientRect().x;
      console.log(xPosition);
      updateScene(xPosition);
    })
    
    return () =>{
      unsubscribeX()
    }
  })
  
  const getScene = () =>{
    if(sceneNumber < scenes.length){
      return scenes[sceneNumber];
    }else{
      return <FinalScene />
    }
    
  }

  const ViewArea = styled(motion.div)`
  `
  const ContentWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
  `

  const SwipePromptWrapper = styled(motion.div)`
    text-align: center;
  `

  return (
    <React.Fragment>
      <ViewArea ref={constraintsRef}>
        <ContentWrapper
          dragDirectionLock
          drag='x'
          dragElastic='0.7' 
          dragConstraints={constraintsRef} 
          dragMomentum={false}
          style={{x}} 
          ref={positionRef}
        >
          {getScene()}
        </ContentWrapper>
      </ViewArea>
      <SwipePromptWrapper>
      <p>>> Swipe to Advance >></p>
    </SwipePromptWrapper>
  </React.Fragment>
  )
}
