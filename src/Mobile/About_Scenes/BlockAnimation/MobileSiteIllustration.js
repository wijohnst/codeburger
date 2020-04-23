import React from 'react'
import styled from 'styled-components'

import TextLogo from '../../../TextLogo'
export default function MobileSiteIllustration() {
  
  const PageWrapper = styled.div`
    background-color: black;
    border-radius: 5px;
    padding: 7px;
    margin: 0 auto;
  `

  const Screen = styled.div`
    background-color: white;
    border-radius: 5px;
  `
  const TopNotch = styled.div`
    background-color: black;
    margin: auto;
    width: 66%;
    min-height: 15px;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  `
  const TopNotchDetail = styled.div`
    background-color: black;
    box-shadow: 2px 2px 8px #707070;
    height: 5px;
    width: 30%;
  `

  const ScreenContentWrapper = styled.div`
    /* background-color: lightpink; */
    height: 420px;
    padding: 5px;
  `
  const HeadingWrapper = styled.div`
    text-align: center;
    position: relative;
    top: 10px;
    font-size: 1.5em;
  `
  const MiniMenuWrapper = styled.div`
    /* background-color: lightpink; */
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const MiniMenuItem = styled.div`
    min-width: 50%;
    min-height: 5%;
    margin: 2px;
  `
  


  return (
    <PageWrapper>
      <Screen>
        <TopNotch>
          <TopNotchDetail />
        </TopNotch>
        <ScreenContentWrapper>
          <HeadingWrapper>
            CODEBURGER
            <TextLogo />
          </HeadingWrapper>
          <MiniMenuWrapper>
            <MiniMenuItem key={'A'} style={{backgroundColor: '#23BC6A'}}/>
            <MiniMenuItem key={'B'} style={{backgroundColor: '#BC2423'}}/>
            <MiniMenuItem key={'C'} style={{backgroundColor: '#FCEE21'}}/>
            <MiniMenuItem key={'D'} style={{backgroundColor: '#534741'}}/>
          </MiniMenuWrapper>
        </ScreenContentWrapper>
      </Screen>
    </PageWrapper>
  )
}
