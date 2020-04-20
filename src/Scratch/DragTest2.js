import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import Scene1 from './Scene1'
import Scene2 from './Scene2'
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
      ease: 'easeInOut'
    }
  },
  exit:{
    x: 400,
  }
}


export default function DragTest2() {
  
  const constraintsRef = useRef(null);
  const positionRef = useRef(null);
  const [sceneNumber, setSceneNumber] = useState(0);
  const scenes = [<Scene1 variants={variants}/>,<Scene2 variants={variants}/>];
  const nextScene = sceneNumber + 1;
  let x = useMotionValue(0);

  useEffect(() =>{
    
    const parentWidth = constraintsRef.current.getBoundingClientRect().width;

    function updateScene(xPosition){
      if(xPosition >= parentWidth * .5){
        setSceneNumber(nextScene);
      }
    }

    const unsubscribeX = x.onChange(() =>{
      let xPosition = positionRef.current.getBoundingClientRect().x;
      console.log(xPosition);
      updateScene(xPosition);
    })
    
    return () =>{
      x.set(0)
      unsubscribeX()
    }
  })
  
  const getScene = () =>{
    if(sceneNumber < scenes.length){
      return scenes[sceneNumber];
    }else{
      return <FinalScene variants={variants} />
    }
    
  }

  const ViewArea = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: lightpink;
    padding: 10px;
  `
  const ContentWrapper = styled(motion.div)`
    display: flex;
    height: 200px;
  `

  return (
    <ViewArea ref={constraintsRef}>
      <ContentWrapper 
        drag='x' 
        dragElastic='0.4' 
        dragConstraints={constraintsRef} 
        style={{x}} 
        ref={positionRef}
      >
        {getScene()}
      </ContentWrapper>
    </ViewArea>
  )
}
