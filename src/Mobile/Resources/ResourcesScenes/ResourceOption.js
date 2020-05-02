import React from 'react'
import styled from 'styled-components'

import { getPath } from '../../../Utils/utilities'

const OptionWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: ${props => props.clipPath};
  &:hover{
    box-shadow: 5px 5px 12px #707070;
  }
  margin: 5px;
`
const TextWrapper = styled.div`
  text-align: center;
  margin-top: ${props => 
    props.shape === 'triangle' ? '25px' : '0px'
  };
`
export default function ResourceOption(props) {

  const {backgroundColor, text, shape} = props;
  const clip = getPath(shape);

  return (
    <OptionWrapper backgroundColor={backgroundColor} clipPath={clip}>
      <TextWrapper shape={shape}>
        <p><b>{text}</b></p>
      </TextWrapper>
    </OptionWrapper>
  )
}
