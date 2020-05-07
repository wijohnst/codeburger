import React from 'react'
import styled from 'styled-components'

import TextLogo from './TextLogo'

const LogoWrapper = styled.div`
display: inline-block;
width: 100%;
/* z-index: 1; */
/* background-color: lightpink; */
/* position: fixed; */
font-size: 2.5em;
/* padding-left: 10px; */
/* border-radius: 5px 5px 5px 5px; */
text-align: center;
`

export default function ScrollLogo() {

  return (
    <LogoWrapper>
      CODEBURGER <TextLogo /> 
    </LogoWrapper>
  )
}
