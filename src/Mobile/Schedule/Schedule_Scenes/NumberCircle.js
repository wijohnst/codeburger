import React from 'react'
import styled from 'styled-components'

const CircleWrapper = styled.div`
clip-path: circle(50% at 50% 50%);
width: 75px;
height: 75px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;
font-weight: 600;
`
export default function NumberCircle(props) {
  const {color, fontColor, children} = props;

  return (
    <CircleWrapper style={{backgroundColor: color, color: fontColor}}>
      {children}
    </CircleWrapper>
  )
}
