import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Image from './Image'
import AboutImage from './about_image.png'
import AdvancePageButton from './AdvancePageButton'
import WillProfile from './WillProfile'
import WillProfile2 from './WillProfile2'
import HowItWorks from './HowItWorks'
import CurriculumOverview from './CurriculumOverview'

const AboutWrapper = styled.div`
text-align: center;
`
const AboutReveal1 = styled(motion.div)`
opacity: 0;
`

export default function About() {

  const [pageCount, setPageCount] = useState(0);
  
  const advancePage = () =>{
    setPageCount(pageCount + 1);
  }
  
  switch (pageCount) {
    case 0:
      return (
        <AboutWrapper>
          <p>CodeBurger is technical skill training for restaurant people.</p><br />
          <Image>
            <img src={AboutImage} alt={'Chef with Tech'} />
          </Image>
          <AboutReveal1 animate={{opacity: 1}} transition={{delay: 3, duration: 1, ease: 'easeIn'}}> 
          <p>Taught by a restaurant person.</p> 
            <AdvancePageButton advancePage={advancePage} />
          </AboutReveal1>
        </AboutWrapper>
      )
    case 1:
      return(
        <AboutWrapper>
          <AboutReveal1 animate={{opacity: 1}} transition={{delay: 1, duration: 1, ease:'easeIn'}}>
            <WillProfile advancePage={advancePage} />
          </AboutReveal1>
        </AboutWrapper>
      )
    case 2:
      return(
        <AboutWrapper>
          <AboutReveal1 animate={{opacity: 1}} transition={{delay: 1, duration: 1, ease:'easeIn'}}>
            <WillProfile2 advancePage={advancePage} />
          </AboutReveal1>
        </AboutWrapper>
      )
    case 3:
      return(
        <AboutWrapper>
          <HowItWorks advancePage={advancePage}/>
        </AboutWrapper>
      )
      case 4:
        return(
          <AboutWrapper>
            <AboutReveal1 animate={{opacity: 1}} transition={{delay: 1, duration: 1, ease:'easeIn'}}>
              <CurriculumOverview advancePage={advancePage} />
            </AboutReveal1>
          </AboutWrapper>
        )
    default:
      return(
        <AboutWrapper>
          Loading
        </AboutWrapper>
      )
  }
}
