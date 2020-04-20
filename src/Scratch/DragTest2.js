import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'

import Scene1 from './Scene1'
import Scene2 from './Scene2'

export default function DragTest2() {
  
  const constraintsRef = useRef(null);
  const [sceneNumber, setSceneNumber] = useState(1);
  let x = useMotionValue(0);
  
  useEffect(() =>{

    function updateScene(){
      setSceneNumber(sceneNumber + 1);
    }

    const unsubscribeX = x.onChange(updateScene)
    

    return () =>{
      unsubscribeX()
    }
  })
  
  const getScene = () =>{
    switch (sceneNumber) {
      case 1:
        return(
          <AnimatePresence>
             <Scene1
              initial={{opacity: 0}}
              animate={{opacity: 1}} 
              exit={{opacity : 0}}
             />
          </AnimatePresence>
         
        )
      case 2:
        return(
          <Scene2 />
        )
        default:
          return(
            <p>Scene Not Found</p>
          )
    }
  }


  const ViewArea = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: lightpink;
  `
  const ContentWrapper = styled(motion.div)`
    height: 200px;
    width: 200px;
    background-color: lightgreen;
    margin: 0 auto;
  `

  return (
    <ViewArea ref={constraintsRef}>
      <ContentWrapper drag dragConstraints={constraintsRef} style={{x}}>
        {getScene()}
      </ContentWrapper>
    </ViewArea>
  )
}
