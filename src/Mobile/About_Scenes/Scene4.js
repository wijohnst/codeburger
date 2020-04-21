import React from 'react'
import styled from 'styled-components'

import Image from '../../Image'
import TransitionChef from '../../transition_chef.png'
import Entrepreneur from '../../entrepreneur.png'


const PageWrapper = styled.div`
  background-color: lightgreen;
  box-shadow: 5px 5px 12px #707070;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  overflow-y: scroll;
`
const InfoWrapper = styled.div`
  background-color: lightgrey;
  
`

export default function Scene4() {
  return (
    <PageWrapper>
      <p>CodeBurger is designed with 2 specific kinds of students in mind.</p>
      <Image>
        <img src={TransitionChef} alt={'Pregnant Chef'} />
      </Image>
      <InfoWrapper>
        <h4><u>The Career Changer</u></h4>
        <p>This student wants to:</p>
        <ul>
          <li>Start a new career outside of the service industry</li>
          <li>Find work that is more accommodating to their lifestyle and goals</li>
        </ul>
      </InfoWrapper>
      <Image>
        <img src={Entrepreneur} alt={'Entrepreneur Seated'} />
      </Image>
      <InfoWrapper>
        <h4><u>The Business Owner</u></h4>
        <p>This student wants to:</p>
        <ul>
          <li>Own their own food service or hospitality business</li>
          <li>Learn the basic web design skills that their business needs</li>
        </ul>
      </InfoWrapper>
      <p> At CodeBurger, <u>100% of the curriculum is always:</u></p>
      <ul>
        <li style={{textAlign: 'left', marginBottom: '5px'}}>Beginner Level</li>
        <li>Based on the real-world technology needs of restaurants, bards, and hospitality businesses</li>
      </ul>
      <p>This means that no matter why you're here, or where you want to go, codeBUrger is the right place to start.</p>
    </PageWrapper>
  )
}
