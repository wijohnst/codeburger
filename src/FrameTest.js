import React from 'react'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Label from './Label'

export default function FrameTest() {
  
  const [clicked, setClicked] = useState(false);
  const [isGrown, setIsGrown] = useState(false);

  let handleClick = () =>{
    setClicked(!clicked);
    setIsGrown(!isGrown);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() =>{
  //     handleClick()
  //   }, 3000);
  //   return () => clearTimeout(timer)
  // },[]);

  const fullScreenVariants = {
    fullScreen:{
      display: 'flex',
    },
    minimized:{
      display: 'flex',
    }
  }

  const childVariants = {
    full:{
      borderRadius: '5px 5px 5px 5px',
      // backgroundColor: null,
      marginTop: '10px',
      textAlign: 'left',
      fontSize: '35%',
      padding: '10px',
      width: '48%',
      opacity: .75,
      height: '12vh',
      transition:{
        duration: 1.5,
        ease: 'easeInOut'
      },
      transitionEnd:{
        color: '#EEFCF7'
      },
    },
    mini:{
      marginTop: '2px',
      width: '9.5vw',
      borderRadius: '2px 2px 2px 2px',
    }
  }

  const bunVariants = {
    fullBun:{
      fontSize: '75px',
      padding: '10px',
      width: '50%',
      opacity: .75,
      height: '13vh',
      transition:{
        when: 'beforeChildren',
        duration: 1.5,
        ease: 'easeInOut'
      },
      transitionEnd:{
        color: '#EA9949'
      }
    },
    fullBottomBun:{
      marginTop: '10px',
      marginBottom: '10px',
      textAlign: 'center',
      fontSize: 10,
      padding: '10px',
      width: '50%',
      opacity: .75,
      height: '5vh',
      transition:{
        duration: 1.5,
        ease: 'easeInOut'
      },
      transitionEnd:{
      color: '#EA9949'
      }
    },
    miniTopBun:{
      clipPath: 'ellipse(50% 95% at 50% 100%)',
      marginTop: '2px',
      width: '10vw',
    },
    miniBottomBun:{
      borderRadius: '5px 5px 5px 5px',
      marginTop: '2px',
      width: '10vw',
    } 
  }
  
  const bannerVariants = {
    start:{
      margin: '10px',
      opacity: 1
    },
    finish:{
      y: 50,
      opacity: 0,
      transition:{
        duration: 2
      }
    }
  }

  const FlexWrapper = styled.div`
    margin: auto;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #EEFCF7;
    height: 100vh;
    width: 100vw;
  `

  const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
  `

  const TitleBanner = styled(motion.div)`
    font-family: 'Cabin', sans-serif;
  `

  const TopBun = styled(motion.div)`
    background-color: #754C24;
    color: #754C24;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
    font-family: 'Cabin';
  `

  const Lettuce = styled(motion.div)`
    background-color: #23BC6A;
    color: #23BC6A;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
  `

  const Tomato = styled(motion.div)`
    background-color: #BC2423;
    color: #BC2423;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
  `

  const Cheese = styled(motion.div)`
    background-color: #FCEE21;
    color: #FCEE21;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
  `

  const Burger = styled(motion.div)`
    background-color: #534741;
    color: #534741;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
  `

  const BottomBun = styled(motion.div)`
    background-color: #754C24;
    color: #754C24;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
  `

  return (
    <FlexWrapper>
      <TitleBanner
      variants={bannerVariants}
      initial={'start'}
      animate={clicked ? 'finish' : 'start'}
      >
        CodeBurger</TitleBanner>
      <Wrapper
      variants={fullScreenVariants}
      animate={clicked ? 'fullScreen' : 'minimized'}
      >
        <TopBun
          variants={bunVariants}
          initial={'miniTopBun'}
          animate={isGrown ? 'fullBun' : 'miniTopBun'}>
          <Label style={{zIndex: 12}} displayText={'CodeBurger'} justification={'center'}/>
        </TopBun>
      </Wrapper>
      <Wrapper>
        <Lettuce
        whileHover={{boxShadow:'10px 10px 12px #707070', color:'black'}} 
        variants={childVariants}
        initial={'mini'}
        animate={isGrown ? 'full' : 'mini'}
        > 
        <Label displayText={'About'} justification={'left'} />
        </Lettuce>
      </Wrapper>
      <Wrapper>
        <Tomato
        whileHover={{boxShadow:'10px 10px 12px #707070', color:'black'}}  
        variants={childVariants}
        initial={'mini'}
        animate={isGrown ? 'full' : 'mini'}
        >
        <Label displayText={'Schedule'} justification={'left'} />
        </Tomato>
      </Wrapper>
      <Wrapper>
        <Cheese 
        whileHover={{boxShadow:'10px 10px 12px #707070', color:'black'}} 
        initial={'mini'}
        variants={childVariants}
        animate={isGrown ? 'full' : 'mini'}
        > 
        <Label displayText={'Resources'} justification={'left'} />
        </Cheese>
      </Wrapper>
      <Wrapper>
        <Burger 
        whileHover={{boxShadow:'10px 10px 12px #707070', color:'black'}} 
        initial={'mini'}
        variants={childVariants}
        animate={isGrown ? 'full' : 'mini'}> 
        <Label displayText={'Join'} justification={'left'} />
        </Burger>
      </Wrapper>
      <Wrapper>
        <BottomBun 
        variants={bunVariants}
        initial={'miniBottomBun'}
        animate={isGrown ? 'fullBottomBun' : 'miniBottomBun'}> 
        <Label displayText={'Electric Lunch Lady Land - 2020'} justification={'Center'} />
        </BottomBun>
      </Wrapper> 
      <button onClick={handleClick}>Click</button>
    </FlexWrapper>
  )
}
