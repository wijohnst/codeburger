import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'

import FinalScene from './FinalScene'

const variants={
  pre:{
    x: -400,
    // opacity: 0
  },
  enter:{
    x: 0,
    transition:{
      duration: 1,
      ease: 'easeIn'
    }
  },
  exit:{
    opacity: 0,
    transition:{
      duration: 1,
      ease: 'easeOut'
    }
  }
}


export default function Gallery({scenes}) {
  
  const constraintsRef = useRef(null);
  const positionRef = useRef(null);
  const [sceneNumber, setSceneNumber] = useState(0);
  const nextScene = sceneNumber + 1;
  let x = useMotionValue(0);

  useEffect(() =>{
    
    const parentWidth = constraintsRef.current.getBoundingClientRect().width;

    function updateScene(xPosition){
      if(xPosition >= parentWidth * .33){
        setSceneNumber(nextScene);
      }
    }

    const unsubscribeX = x.onChange(() =>{
      let xPosition = positionRef.current.getBoundingClientRect().x;
      console.log(xPosition);
      updateScene(xPosition);
    })
    
    return () =>{
      // x.set(0)
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
    display: flex;
    flex-direction: column;
  `
  const ContentWrapper = styled(motion.div)`
    display: flex;
    height: 200px;
  `

  return (
    <ViewArea ref={constraintsRef}>
      <ContentWrapper 
        drag='x' 
        dragElastic='0.0' 
        dragConstraints={constraintsRef} 
        style={{x}} 
        ref={positionRef}
      >
        {getScene()}
      </ContentWrapper>
      <p>Swipe to Advance</p>
    </ViewArea>
  )
}
