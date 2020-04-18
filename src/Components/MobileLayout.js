import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'

import TextLogo from '../TextLogo'
import MobileCard from './MobileCard'
import MobileCardTab from './MobileCardTab'
import AboutMobileContent from './AboutMobileContent'
import ScheduleMobileContent from './ScheduleMobileContent'
import ResourcesMobileContent from './ResourcesMobileContent'
import JoinMobileContent from './JoinMobileContent'


export default function MobileLayout() {
  
  const MobileLayoutWrapper = styled(motion.div)`
    height: 100vh;
    /* background-color: lightpink; */
  `
  return (
    <React.Fragment>
      <MobileLayoutWrapper>
        <div>
          <h1>CODEBURGER<TextLogo /></h1>
        </div>
        <MobileCardTab color={'#23BC6A'} secondaryColor={'white'} text={'About'}/>
        <MobileCard backgroundColor={'#23BC6A'} key={'About'}>
          <AboutMobileContent />
        </MobileCard>
        <MobileCardTab color={'#BC2423'} secondaryColor={'#23BC6A'} text={'Schedule'}/>
        <MobileCard backgroundColor={'#BC2423'} key={'Schedule'}>
          <ScheduleMobileContent />
        </MobileCard>
        <MobileCardTab color={'#FCEE21'} secondaryColor={'#BC2423'} text={'Resources'}/>
        <MobileCard backgroundColor={'#FCEE21'} key={'Resources'}>
          <ResourcesMobileContent />
        </MobileCard>
        <MobileCardTab color={'#534741'} secondaryColor={'#FCEE21'} text={'Join'}/>
        <MobileCard backgroundColor={'#534741'} key={'Join'}>
          <JoinMobileContent />
        </MobileCard>
      </MobileLayoutWrapper>
    </React.Fragment>
  )
}
