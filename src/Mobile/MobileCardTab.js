import React from 'react'
import styled from 'styled-components'

const MobileCardTabWrapper = styled.div`
position: relative;
font-weight: 400;
&:hover{
  font-weight: 400;
  cursor: pointer;
}
`
const Tab = styled.div`
width: 40%;
padding: 2px;
color: ${props => props.otherColor};
text-align: center;
border-radius: 2px 2px 0px 0px;
font-size: 1.5em;
`

export default function MobileCardTab2(props) {
  
  const  {color, secondaryColor, children} = props;

  return (
    <MobileCardTabWrapper style={{backgroundColor: secondaryColor}} >
        <Tab style={{backgroundColor : color}}>
          {children}
        </Tab>
    </MobileCardTabWrapper>
  )
}
