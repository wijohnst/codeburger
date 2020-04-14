import React from 'react'
import styled from 'styled-components'

export default function Parent(props) {
  
  const {backgroundColor} = props; 

  const Container = styled.div`
    background-color: ${backgroundColor};
  `

  
  return (
    <Container>
      {props.children}
    </Container>
  )
}
