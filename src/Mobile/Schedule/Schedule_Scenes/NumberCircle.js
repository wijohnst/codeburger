import React from 'react'
import styled from 'styled-components'

export default function NumberCircle(props) {
  const {color, fontColor, children} = props;

  const CircleWrapper = styled.div`
    background-color: ${color};
    color: ${fontColor};
    clip-path: circle(50% at 50% 50%);
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: 600;
  `
  return (
    <CircleWrapper>
      {children}
    </CircleWrapper>
  )
}
