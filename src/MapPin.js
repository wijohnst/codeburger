import React from 'react'
import styled from 'styled-components'

export default function MapPin(props) {
  
  const {color, pinCenterColor} = props;

  
  const PinWrapper = styled.div`
    filter: drop-shadow(2px 0px 5px #707070);
  `

  const PinHead = styled.div`
    height: 65px;
    width: 65px;
    clip-path: circle(50% at 50% 50%);
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const PinHeadCenter = styled.div`
    height: 35px;
    width: 35px;
    clip-path: circle(50% at 50% 50%);
    background-color: ${pinCenterColor};
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const PinPoint = styled.div`
    height: 65px;
    width: 55px;
    background-color: ${color};
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    border-radius: 3px 3px 3px 3px;
    position: relative;
    top: -15px;
    left: 5px;
  `

  return (
    <PinWrapper>
      <PinHead>
          <PinHeadCenter />
      </PinHead>
      <PinPoint />
    </PinWrapper>
  )
}
