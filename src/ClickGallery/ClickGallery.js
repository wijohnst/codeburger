import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

export default function ClickGallery(props) {
  
  const [sceneNumber, setSceneNumber] = useState(0);
  const {scenes, updateOpen, indexNumber} = props;

  const handlePageNav = (isPageUp) =>{
    isPageUp ? setSceneNumber(sceneNumber + 1) : setSceneNumber(sceneNumber - 1)
  }

  //Styling
  const ContentWrapper = styled(motion.div)`
  text-align: center;
  `
  const ForwardButton = styled.div`
    display: inline-block;
    border: solid thin #707070; 
    padding: 5px;
    margin: 5px;
  `
  const BackButton = styled.div`
    display: inline-block;
    border: solid thin #707070; 
    padding: 5px;
    margin-top: 5px;
  `
  const NavWrapper = styled.div`
    text-align: center;
  `
  if(sceneNumber === 0){
    return (
      <AnimatePresence key={'First page'}>
        <ContentWrapper key={'First Content'}>
          {scenes[sceneNumber]}
        <ForwardButton onClick={() => handlePageNav(true)}>Next</ForwardButton>
        </ContentWrapper>
      </AnimatePresence>
    )
  }else if(sceneNumber < scenes.length - 1){
   return(
      <AnimatePresence key={'Middle pages'}>
        <ContentWrapper key={'Middle Content'}>
          {scenes[sceneNumber]}
        </ContentWrapper >
        <NavWrapper>
          <BackButton onClick={() => handlePageNav(false)} >Back</BackButton>
          <ForwardButton onClick={() => handlePageNav(true)} >Next</ForwardButton>
        </NavWrapper>
    </AnimatePresence>
   )
 }else if(sceneNumber === scenes.length - 1){
   return(
     <AnimatePresence key={'Last page'}>
       <ContentWrapper key={'Last Content'}>
          {scenes[sceneNumber]}
        </ContentWrapper>
        <NavWrapper>
          <ForwardButton onClick={() => updateOpen(indexNumber)} >Continue</ForwardButton>
        </NavWrapper>
     </AnimatePresence>
   )
 }
}
