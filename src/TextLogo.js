import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
display: inline-block;
padding: 10px;
`
const TextWrapper = styled.div`
transform: rotate(90deg);
transform-origin: 50%;
font-size: 1em;
kerning: .5;
`

export default function TextLogo() {
  
  return (
    <LogoWrapper>
      <TextWrapper>
        {'{||||}'}
      </TextWrapper>
    </LogoWrapper>
  )
}
