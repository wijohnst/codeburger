import React from 'react'
import styled from 'styled-components'

import FallingBlocks from '../../../FallingBlocks'

const PageWrapper = styled.div`
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  padding: 5px;
`
const BlocksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Scene5({variants}) {
  return (
    <PageWrapper>
      <p>CodeBurger covers the 3 core technologies of modern web design: <b>HTML, CSS, and Javascript.</b></p>
      <BlocksWrapper>
        <FallingBlocks />
      </BlocksWrapper>
    </PageWrapper>
  )
}
