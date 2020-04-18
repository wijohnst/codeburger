import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function MobileCardTab(props) {
  
 const {color, secondaryColor, text, cycleIsOpen} = props;
 
 const MobileCardTabWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `
  const Tab = styled.div`
    display: inline-flex;
    min-width: 30%;
    padding: 5px;
    font-size: 1.5em;
    line-height: .75;
    background-color: ${color};
  `
  const Background = styled.div`
    background-color: ${secondaryColor};
    width: 100%;
    height: 20px;
  `

  return (
    <MobileCardTabWrapper>
      <Tab>
        {text}
      </Tab>
      <Background />
    </MobileCardTabWrapper>
  )
}
