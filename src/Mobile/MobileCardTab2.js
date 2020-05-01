import React from 'react'
import styled from 'styled-components'

export default function MobileCardTab2(props) {
  
  const {children, color, secondaryColor} = props;

  const MobileCardTabWrapper = styled.div`
    background-color: ${secondaryColor};
    position: relative;
  `
  const Tab = styled.div`
    width: 40%;
    padding: 2px;
    background-color: ${color};
    text-align: center;
    border-radius: 2px 2px 0px 0px;
    font-size: 1.5em;
  `

  return (
    <MobileCardTabWrapper>
        <Tab>
          {children}
        </Tab>
    </MobileCardTabWrapper>
  )
}
