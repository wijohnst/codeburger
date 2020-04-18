import React from 'react'
import styled from 'styled-components'

import DifficultyMeter from './DifficultyMeter'

export default function JavascriptDescription() {
  
  const TextWrapper = styled.div`
    text-align: left;
    padding: 5px;
  `

  const DifficultyMeterWrapper = styled.div`
    text-align: left;

  `
  return (
   <React.Fragment>
   <TextWrapper>
    If HTML and CSS are about making the web <i>look like something</i>,
    JavaScript is here to make it <b><i>do something.</i></b> JavaScript is the tool that 
    allows us to create more interactive and dynamic web sites. <b>JavaScript for Restaurants</b> answers the
    question "How can I make my website do more?"
   </TextWrapper>
   <DifficultyMeterWrapper>
    <DifficultyMeter status={[true,true,true]} color={'#BC2423'}/>
    <p>Prerequisites: HTML for Restaurants, CSS for Restaurants</p>
   </DifficultyMeterWrapper>
   <hr />
   </React.Fragment>
  )
}