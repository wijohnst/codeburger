import React from 'react'
import styled from 'styled-components'

export default function TopBun() {
  
  const BunDiv = styled.div`
    background-color: #754C24;
    color: #754C24;
    height: 10%;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
  `
  return (
      <BunDiv>
        <h4>CodeBurger</h4>
      </BunDiv>
  )
}
