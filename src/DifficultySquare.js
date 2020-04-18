import React from 'react'
import styled from 'styled-components'

export default function DifficultySquare(props) {
 
  const {active, color} = props;

  const DifficultySquareWrapper = styled.div`
    height: 15px;
    width: 15px;
    background-color: ${active ? `${color}` : 'lightgrey'};
    margin: 2px;
    border-radius: 2px 2px 2px 2px;
  `
  
  return (
    <DifficultySquareWrapper />
  )
}
