import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import NavOption from './NavOption'
import TopBun from './TopBun'
import BottomBun from './BottomBun'
import About from './About'
import Schedule from './Schedule'
import ScrollLogo from './ScrollLogo'

import BurgerLogoSkewed from './burger_logo_skewed.png'

export default function ComponentRefactor() {
  
const [clicked, setClicked] = useState(false);

useEffect(() => {
  const timer = setTimeout(() =>{
    handleClick()
  }, 3000);
  return () => clearTimeout(timer)
},[]);

const handleClick = () =>{
  setClicked(!clicked);
}
  const displayWrapperVariants ={
    start:{
      minWidth: '5%'
    },
    end:{
      width: '75%',
      height: '75%',
      transition:{
        duration: 1,
        ease: "easeIn"
      }
    }
  }
  const WindowWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: middle;
    background-image: url(${BurgerLogoSkewed});
    background-size: 60%;
  `
  const DisplayWrapper = styled(motion.div)`
    margin: 0 auto;
  `
  return (
    <Fragment>
      <ScrollLogo />
    <WindowWrapper>
      <DisplayWrapper 
        variants={displayWrapperVariants}
        initial={'start'}
        animate={clicked ? 'end' : 'start'}
      >
        <TopBun />
        <NavOption textContent={{label: 'About'}} condition={clicked} justification={'left'} color={'#23BC6A'}>
          <About />
        </NavOption>
        <NavOption textContent={{label: 'Schedule'}} condition={clicked} justification={'left'} color={'#BC2423'}>
          <Schedule />
        </NavOption>
        <NavOption textContent={{label: 'Resources'}} condition={clicked} justification={'left'} color={'#FCEE21'}/>
        <NavOption textContent={{label: 'Join'}} condition={clicked} justification={'left'} color={'#534741'}/>
        <BottomBun />
      </DisplayWrapper>
  </WindowWrapper>
  </Fragment>
  )
}
