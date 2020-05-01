import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SignPost from './signpost.png'
import Human from './roadmap_human.png'
import Image from './Image'
import MapGuy from './map_guy.png'
import RoadMapInfo from './RoadMapInfo'
import RoadMap from './RoadMap' 
import AdvancePageButton from './AdvancePageButton' 

const BackgroundWrapper = styled(motion.div)`
display: grid;
grid-template-columns: repeat(8 1fr);
grid-template-rows: repeat(8 1fr);
grid-template-areas:
'p p p s s g g g'
'p p p s s g g g'
'p p p s s g g g'
'c c c c c c c c'
'c c c c c c c c'
'c c c c c c c c'
'. m m m m m m .'
'. m m m m m m .';
`

const PWrapper = styled(motion.div)`
opacity: 0;
grid-area: p;
`
const CWrapper = styled(motion.div)`
opacity: 0;
grid-area: c;
padding: 10px;
`

const SWrapper = styled(motion.div)`
opacity: 0;
grid-area: s;
`

const MWrapper = styled(motion.div)`
opacity: 0;
grid-area: m;
`

const GWrapper = styled(motion.div)`
opacity: 0;
grid-area: g;
`

const AdvancePageButtonWrapper = styled.div`
text-align: center;
padding: 10px;
`

export default function CurriculumOverviewScene5({advancePage}) {
  
  return (
    <React.Fragment>
      <BackgroundWrapper>
        <PWrapper animate={{opacity: 1}} transition={{duration: 1, delay: 1, ease: 'easeIn'}}>
          <Image>
            <img src={Human} alt={'Person Searching'} />
          </Image>
        </PWrapper>
        <CWrapper animate={{opacity: 1}} transition={{duration: 1, delay: 3, ease: 'easeIn'}}>
          <RoadMapInfo />
        </CWrapper>
        <SWrapper animate={{opacity: 1}} transition={{duration: 1, delay: 1, ease: 'easeIn'}}> 
          <Image>
            <img src={SignPost} alt={'Sign Post'} />
          </Image>
        </SWrapper>
        <MWrapper animate={{opacity: 1}} transition={{duration: 1, delay: 6, ease: 'easeIn'}}>
          <RoadMap />
        </MWrapper>
        <GWrapper animate={{opacity: 1}} transition={{duration: 1, delay: 3, ease: 'easeIn'}}>
          <Image>
            <img src={MapGuy} alt={'Person with Map'} />
          </Image>
        </GWrapper>
      </BackgroundWrapper>
      <AdvancePageButtonWrapper>
        <AdvancePageButton advancePage={advancePage} />
      </AdvancePageButtonWrapper>
    </React.Fragment>
  )
}
