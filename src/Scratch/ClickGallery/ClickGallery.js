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
  text-align: center;
  `
  const ForwardButton = styled.div`
    display: inline-block;
    border: solid thin #707070; */
    padding: 5px;
    margin: 5px;
  `
  const BackButton = styled.div`
    display: inline-block;
    border: solid thin #707070; */
    padding: 5px;
    margin-top: 5px;
  `
  const NavWrapper = styled.div`
    text-align: center;
  `
  if(sceneNumber === 0){
    return (
      <AnimatePresence key={'First page'}>
        <ContentWrapper>
          {scenes[sceneNumber]}
        <ForwardButton onClick={() => handlePageNav(true)}>Next</ForwardButton>
        </ContentWrapper>
      </AnimatePresence>
    )
  }else if(sceneNumber < scenes.length){
   return(
      <AnimatePresence key={'Middle pages'}>
        <ContentWrapper>
          {scenes[sceneNumber]}
        </ContentWrapper>
        <NavWrapper>
          <BackButton onClick={() => handlePageNav(false)} >Back</BackButton>
          <ForwardButton onClick={() => handlePageNav(true)} >Next</ForwardButton>
        </NavWrapper>
    </AnimatePresence>
   )
 }else if(sceneNumber === scenes.length){
   return(
     <AnimatePresence key={'Last page'}>
       <ContentWrapper>
          <FinalScene />
          <BackButton onClick={() => handlePageNav(false)}>Back</BackButton>
       </ContentWrapper>
       
     </AnimatePresence>
   )
 }
}
