import React from 'react'
import styled from 'styled-components'

import DifficultyMeter from './DifficultyMeter'

export default function HtmlDescription() {
  
  const TextWrapper = styled.div`
    text-align: left;
    padding: 5px;
  `

  const DifficultyMeterWrapper = styled.div`
    text-align: left;

  `
  return (
   <React.Fragment>
   <TextWrapper>If a website was a house, HTML would be the foundation, so it make sense that this
     is where we would start. <b>HTML for Restaurants</b> is an overview of <i>hypertext
     markup language</i>, the OG of web design. This course will answer the question "How do I design,
     code, post a simple website?" 
   </TextWrapper>
   <DifficultyMeterWrapper>
    <DifficultyMeter status={[true,false,false]} color={'#1D9D58'}/>
    <p>Prerequisites: None</p>
   </DifficultyMeterWrapper>
    <hr />
   </React.Fragment>
  )
}
