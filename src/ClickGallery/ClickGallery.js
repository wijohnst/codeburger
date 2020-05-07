import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { getPath, getColor } from '../Utils/utilities'

//Styling
const ContentWrapper = styled(motion.div)`
text-align: center;
`

const ButtonWrap = styled.div`
  margin-top: 10px;
  display: inline-block;
  filter: drop-shadow(1px 6px 3px rgba(50, 50, 0, 0.5));
  &:hover{
    filter: drop-shadow(0px 0px 0px);
  }
`
const ForwardButton = styled.div`
  display: inline-block;
  margin: 2px;
  clip-path: ${getPath('rightArrow')};
  background-color: white;
  width: 50px;
  height: 25px;
  &:hover{
    background-color: ${getColor('grey')};
    cursor: pointer;
  }
`
const BackButton = styled.div`
  display: inline-block;
  margin: 2px;
  clip-path: ${getPath('leftArrow')};
  background-color: white;
  width: 50px;
  height: 25px;
  &:hover{
    background-color: ${getColor('grey')};
    cursor: pointer;
  }
`
const ContinueButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  clip-path: ${getPath('circle')};
  background-color: white;
  width: 50px;
  height: 50px;
  &:hover{
    background-color: ${getColor('grey')};
    cursor: pointer;
  }
`
const NavWrapper = styled.div`
  text-align: center;
`
export default function ClickGallery(props) {
  
  const [sceneNumber, setSceneNumber] = useState(0);
  const {scenes, updateOpen, indexNumber} = props;

  const handlePageNav = (isPageUp) =>{
    isPageUp ? setSceneNumber(sceneNumber + 1) : setSceneNumber(sceneNumber - 1)
  }

  if(sceneNumber === 0){
    return (
      <AnimatePresence key={'First page'}>
        <ContentWrapper key={'First Content'}>
          {scenes[sceneNumber]}
          <ButtonWrap>
            <ForwardButton onClick={() => handlePageNav(true)} />
          </ButtonWrap>
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
          <ButtonWrap>
            <BackButton onClick={() => handlePageNav(false)} />
          </ButtonWrap>
          <ButtonWrap>
            <ForwardButton onClick={() => handlePageNav(true)} />
          </ButtonWrap>
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
          <ButtonWrap>
            <ContinueButton onClick={() => [updateOpen(indexNumber), setSceneNumber(0)]}>X</ContinueButton>
          </ButtonWrap>
        </NavWrapper>
     </AnimatePresence>
   )
 }
}
