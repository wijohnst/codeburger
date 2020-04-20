import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion , useMotionValue, useTransform} from 'framer-motion'

export default function DragTest() {

  const constraintsRef = useRef(null);
 
  useEffect(() => x.onChange(position =>{console.log(position)},[]));

  const x = useMotionValue(0);
  const xInput = [0,10,20,30];
  const colorRange = ['lightpink', 'lightgreen', 'lightblue', 'lightgrey'];
  const backgroundColor = useTransform(x, xInput, colorRange);

  const DragWrapper = styled(motion.div)`
    height: 30%;
    width: 30%;
    
  `
  const DragElement = styled(motion.div)`
     
    `
  return (
    <DragWrapper ref={constraintsRef} style={{backgroundColor}}>
      <DragElement drag={x} dragConstraints={constraintsRef} style={{x}}>
        Drag Test
      </DragElement>
    </DragWrapper>
    
  )
}
