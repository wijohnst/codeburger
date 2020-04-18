import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import DifficultySquare from './DifficultySquare'

export default function DifficultyMeter(props) {

  const {status, color} = props;

  const DifficultyMeterWrapper = styled.div`
    display: inline-flex;
    align-items: center;
  `
  const DifficultySquaresWrapper = styled.div`
    display: flex;
    margin-left: 2px;
  `  
  return (
    <DifficultyMeterWrapper>
      <p>Difficulty:</p>
      <DifficultySquaresWrapper>
        {status.map(((isActive, index) => {
          return(
          <DifficultySquare active={isActive} color={color} key={index}/>
          )
        }))}
        {/* <DifficultySquare active={true} color={'#1D9D58'}/>
        <DifficultySquare active={false} color={'red'}/>
        <DifficultySquare active={false} color={'red'}/> */}
      </DifficultySquaresWrapper>
    </DifficultyMeterWrapper>
  )
}

