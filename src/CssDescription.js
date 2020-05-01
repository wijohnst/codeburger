import React from 'react'
import styled from 'styled-components'

import DifficultyMeter from './DifficultyMeter'

const TextWrapper = styled.div`
text-align: left;
padding: 5px;
`

const DifficultyMeterWrapper = styled.div`
text-align: left;
`

export default function CssDescription() {
  
  return (
   <React.Fragment>
   <TextWrapper>
   If HTML is the foundation of our house, CSS is the interior decoration. <b>CSS for Restaurants </b> 
   builds on what you learned in the first course through the introduction of <i>Cascading Style Sheets</i>. This
   course will answer the question "How do I make my website look great?" 
   </TextWrapper>
   <DifficultyMeterWrapper>
    <DifficultyMeter status={[true,true,false]} color={'#FCEE21'}/>
    <p>Prerequisites: HTML for Restaurants</p>
   </DifficultyMeterWrapper>
   <hr />
   </React.Fragment>
  )
}