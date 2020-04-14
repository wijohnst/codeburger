import React from 'react'
import styled from 'styled-components'

export default function Image(props) {
  
  const ImageWrapper = styled.div`
    height: 200px;
  `
  return (
    <ImageWrapper>
      {props.children}
    </ImageWrapper>
  )
}
