import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'
 
const variants = {
    open:{
      scale: 20,
      backgroundColor: "lightgray",
      transition:{
        duration: 2
      }
    },
    closed:{
      backgroundColor: 'lightgreen',
      height: '1px',
      width: '1px',
      transition:{
        duration: 2
      }
    }
  }


export default function UseCycleTest() {
  
  const [isOpen, toggleOpen] = useCycle(false,true);
 
  const handleClick = () =>{
    toggleOpen();
  }
  const NavMenu = styled(motion.div)`

  `

  return (
    <NavMenu
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      Nav Menu
      <motion.div variants={variants} />
      <button onClick={handleClick}> Toggle </button>
    </NavMenu>
  )
}
