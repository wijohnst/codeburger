import React from 'react'
import styled from 'styled-components'

import TextLogo from './TextLogo'

export default function ScrollLogo() {
  const LogoWrapper = styled.div`
    display: inline;
    width: 100%;
    z-index: 1;
    background-color: white;
    position: fixed;
    font-size: 2.5em;
    padding-left: 10px;
    border-radius: 5px 5px 5px 5px;
  `
  return (
    <LogoWrapper>
      CODEBURGER <TextLogo /> 
    </LogoWrapper>
  )
}
