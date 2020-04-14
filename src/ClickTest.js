import  React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'



export default function ClickTest() {
  
  const [clicked, setClicked] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState();

  let handleClick = () =>{
    setClicked(!clicked);
    setIsButtonHidden(!isButtonHidden);
  }


  const variant = {
    active:{
      width: '99%',
      height: "calc(100vh/7",
      opacity: .75,
      marginTop: 0,
      transition: {
        duration: 2 
      },
    }
  }

  const buttonVariants = {
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1
    }
  }

  const labelVariants = {
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1
    }
  }

  const Wrapper = styled.div`
    width: 100vw;
    text-align: center;
  `

  const TopBun = styled(motion.div)`
    background-color: #754C24;
    height: 10px;
    width: 10%;
  `

  const BottomBun = styled(motion.div)`
  background-color: #754C24;
  height: 10px;
  width: 10%;
  margin-top: 10px;
  `

  const Lettuce = styled(motion.div)`
  background-color: #23BC6A;
  height: 5px;
  width: 10%;
  margin-top: 10px;
  `

  const Tomato = styled(motion.div)`
  background-color: #BC2423;
  height: 5px;
  width: 10%;
  margin-top: 10px;
  `

  const Burger = styled(motion.div)`
  background-color: #534741;
  height: 5px;
  width: 10%;
  margin-top: 10px;
  `

  const Cheese = styled(motion.div)`
  background-color: #FCEE21;
  height: 5px;
  width: 10%;
  margin-top: 10px;
  `

  return (
   <Wrapper>
     <TopBun 
      variants={variant}
      animate={clicked ? "active" : "inactive"}
      style={{ originX: 0}}
      whileHover={{color: 'white'}}
     >
    </TopBun> 
    <Lettuce
    variants={variant}
    animate={clicked ? "active" : "inactive"}
    style={{ originX: 0}}
    /> 
    <Tomato
    variants={variant}
    animate={clicked ? "active" : "inactive"}
    style={{ originX: 0}}
    /> 
    <Cheese
      variants={variant}
      animate={clicked ? "active" : "inactive"}
      style={{ originX: 0}}
    />  
    <Burger
      variants={variant}
      animate={clicked ? "active" : "inactive"}
      style={{ originX: 0}}
    />  
     <BottomBun 
      variants={variant}
      animate={clicked ? "active" : "inactive"}
      style={{ originX: 0}}
     />
    <motion.button onClick={handleClick}
      variants={buttonVariants}
      animate={isButtonHidden ? "hidden" : "visible"}
    >Enter</motion.button>
   </Wrapper>
   
  )
}
