import React from 'react'
import styled from 'styled-components'

export default function RoadMap() {
  
  const RoadMapWrapper = styled.div`
    background-color: 'lightpink';
    border: thin solid black;
    border-radius: 5px 5px 5px 5px;
  `

  const RoadMapHeading = styled.div`
    background-color: lightgreen;
  `
  return (
    <RoadMapWrapper>
      <RoadMapWrapper>
        <RoadMapHeading>
          <h1><u>Course Road Map</u></h1>
        </RoadMapHeading>
      </RoadMapWrapper>
    </RoadMapWrapper>
  )
}
