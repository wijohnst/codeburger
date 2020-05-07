import React from 'react'
import styled from 'styled-components'

import TextLogo from './TextLogo'

const LogoWrapper = styled.div`
display: inline-block;
width: 100%;
font-size: 2.5em;
text-align: center;
`

export default function ScrollLogo() {

  return (
    <LogoWrapper>
      CODEBURGER <TextLogo /> 
    </LogoWrapper>
  )
}
