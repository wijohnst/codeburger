import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'

export default function ToggleTest() {

  const [isOpen, toggleOpen] = useCycle(false,true);
  const variants = {
    open:{
      scaleX: 100,
      scaleY: 50,
      backgroundColor: "lightgreen"
    },
    closed:{
      scale: 5,
      backgroundColor: 'purple'
    }
  
  }

const TestSquare = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: lightpink;
`

return (
  <React.Fragment>
    <TestSquare
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      onClick={() => toggleOpen()}
    ></TestSquare>
  </React.Fragment>
)
}
