import React from 'react'
import styled from 'styled-components'

import Image from './Image'

import TransitionChef from './transition_chef.png'
import Entrepreneur from './entrepreneur.png'
import AdvancePageButton from './AdvancePageButton'

export default function HowItWorksContent({advancePage}) {
  
  const ContentWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'heading heading'
    'chefPic entPic';
  `
  const Text = styled.p`
    grid-area: heading;
  `
  const ChefPic = styled(Image)`
    grid-area: chefPic;
  `
  const EntPic = styled(Image)`
    grid-area: entPic;
  `
  const InfoWrapper = styled.div`
    background-color: lightgray;
    padding: 5px;
    min-height: 200px;
    margin: 0 auto;
    max-width: 90%;
  `
  const InfoListItem = styled.li`
    text-align: left;
  `
  const ContentWrapper2 = styled.div``

  const CurriculumText = styled.h2`
    text-align: center;
    border-radius: 5px 5px 5px 5px;
    width: 50%;
    margin: 0 auto;
    box-shadow: 5px 5px 12px #707070;
  `
  return (
    <React.Fragment>
    <ContentWrapper>
      <Text>While putting these classes together, I've had two specific kinds of students in mind.</Text>
      <ChefPic>
        <img src={TransitionChef} alt={'Transition Chef'} />
      </ChefPic>
      <EntPic>
        <img src={Entrepreneur} alt={'Entrepreneur Seated'} />
      </EntPic>
      <InfoWrapper>
      <h4><u>The Career Changer</u></h4>
      <p>This student wants to:</p>
          <ul>
            <InfoListItem>Start a new career outside of the service industry</InfoListItem>
            <InfoListItem>Find work that is more flexible or accommodating to their lifestyle</InfoListItem>
          </ul>
      </InfoWrapper>
      <InfoWrapper>
      <h4><u>The Entrepreneur</u></h4>
      <p>This student wants to:</p>
          <ul>
            <InfoListItem>Start their own food service or hospitality business</InfoListItem>
            <InfoListItem>Learn the basic web design skills that their business needs  </InfoListItem>
          </ul>
      </InfoWrapper>
    </ContentWrapper>
    {/* <CenterBurger>
      <BurgerLogo />
    </CenterBurger> */}
    <ContentWrapper2>
      <p> At CodeBurger, 100% of the curriculum is always:</p>
      <CurriculumText style={{border:'thick solid #FCEE21', lineHeight: 2}}>Beginner Level</CurriculumText><br />
      <CurriculumText style={{border:'thick solid #BC2423'}}>Based on the real-world needs of restaurants, bars, and hospitality businesses</CurriculumText>
    </ContentWrapper2>
    <p style={{textAlign:'center'}}> So no matter why you're here, or where you want to go, CodeBurger is the right place to start.</p>
    <AdvancePageButton style={{color:'black'}} advancePage={advancePage}/>
    </React.Fragment>
  )
}
