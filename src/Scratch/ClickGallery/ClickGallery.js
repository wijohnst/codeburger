import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import FinalScene from '../FinalScene'

export default function ClickGallery(props) {
  
  const [sceneNumber, setSceneNumber] = useState(0);
  const {scenes} = props;

  const handlePageNav = (isPageUp) =>{
    isPageUp ? setSceneNumber(sceneNumber + 1) : setSceneNumber(sceneNumber - 1)
  }
  //Styling
  const ContentWrapper = styled(motion.div)`

  `
  if(sceneNumber === 0){
    return (
      <AnimatePresence>
        <ContentWrapper>
          {scenes[sceneNumber]}
        </ContentWrapper>
        <button onClick={() => handlePageNav(true)}>Next</button>
      </AnimatePresence>
    )
  }else if(sceneNumber < scenes.length){
   return(
      <AnimatePresence>
        <ContentWrapper>
          {scenes[sceneNumber]}
        </ContentWrapper>
        <button onClick={() => handlePageNav(true)}>Next</button>
        <button onClick={() => handlePageNav(false)}>Back</button>
    </AnimatePresence>
   )
 }else if(sceneNumber === scenes.length){
   return(
     <AnimatePresence>
       <ContentWrapper>
         <FinalScene />
       </ContentWrapper>
       <button onClick={() => handlePageNav(false)}>Back</button>
     </AnimatePresence>
   )
 }
}
