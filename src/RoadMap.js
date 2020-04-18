import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MapPin from './MapPin'
import HtmlDescription from './HtmlDescription'
import CssDescription from './CssDescription'
import JavascriptDescription from './JavascriptDescription'

export default function RoadMap() {
  
  const MapWrapper = styled.div`
    background-color: #23BC6A;
    border-radius: 5px 5px 5px 5px;
    margin-left: 10px;
    padding: 5px;
  `

  const MapWrapperInner = styled.div`
    background-color: white;
    margin: 5px;
    padding: 5px;
    border-radius: 5px 5px 5px 5px;
    border: thin solid white;
    display: grid;
    grid-template-columns: repeat(3 1fr);
    grid-template-rows: repeat(3 1fr);
    grid-column-gap: 20px;
    grid-template-areas:
    'h ht ht'
    'c ct ct'
    'j jt jt';
  `

  const HtmlLogoWrapper = styled.div`
    grid-area: h;
    /* background-color: lightpink; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `

  const HtmlTextWrapper = styled.div`
    grid-area: ht;
  `
  
  const CssLogoWrapper = styled.div`
    grid-area: c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `

  const CssTextWrapper = styled.div`
    grid-area: ct;
  `

  const JsLogoWrapper = styled.div`
    grid-area: j;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `

  const JsTextWrapper = styled.div`
    grid-area: jt;
  `
  
  return (
    <MapWrapper>
      <MapWrapperInner>
        <HtmlLogoWrapper>
          <MapPin color={'#1D9D58'} pinCenterColor={'white'}/>
          <h3>HTML</h3>
        </HtmlLogoWrapper>
        <HtmlTextWrapper>
          <HtmlDescription />
        </HtmlTextWrapper>
        <CssLogoWrapper>
          <MapPin color={'#FCEE21'} pinCenterColor={'white'} />
          <h3>CSS</h3>
        </CssLogoWrapper>
        <CssTextWrapper>
          <CssDescription />
        </CssTextWrapper>
        <JsLogoWrapper>
          <MapPin color={'#BC2423'} pinCenterColor={'white'} />
          <h3>JavaScript</h3>
        </JsLogoWrapper>
        <JsTextWrapper>
          <JavascriptDescription />
        </JsTextWrapper>
      </MapWrapperInner>
    </MapWrapper>
  )
}
