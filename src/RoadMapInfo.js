import React from 'react'
import styled from 'styled-components'

export default function RoadMapInfo() {
  
  const RoadMapWrapper = styled.div`
    text-align: left;
    border: thin solid #23BC6A;
    border-radius: 5px 5px 5px 5px;
  `
  const Heading = styled.div`
    font-size: 3em;
  `
  const TextWrapper = styled.div`
    padding: 5px;
  `

  return (
    <RoadMapWrapper>
      <Heading>Course Road Map</Heading>
        <TextWrapper>CodeBurger is designed to be the first resource on your coding journey. And what's a journey
          without a map? This is a brief outline of what we'll be covering- don't worry if it doesn't all make sense now.
          Just remember that CodeBurger is designed with the beginner in mind. <i>If that's you</i>, just start with the first lesson
          in Course One! 
      </TextWrapper>
    </RoadMapWrapper>
  )
}
