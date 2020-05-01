import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
height: 200px;
`

export default function Image(props) {
  
  return (
    <ImageWrapper>
      {props.children}
    </ImageWrapper>
  )
}
