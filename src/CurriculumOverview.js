import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import CurriculumOverviewScene1 from './CurriculumOverviewScene1'
import CurriculumOverviewScene2 from './CurriculumOverviewScene2'
import CurriculumOverviewScene3 from './CurriculumOverviewScene3'
import CurriculumOverviewScene4 from './CurriculumOverviewScene4'
import CurriculumOverviewScene5 from './CurriculumOverviewScene5'

const CurriculumOverviewWrapper = styled(motion.div)`
background-color: white;
border-radius: 5px 5px 5px 5px;
width: 75%;
margin: 0 auto;
`

export default function CurriculumOverview({advancePage}) {
  
  const [sceneNumber, setSceneNumber] = useState(0);

  const dynamicContent = (sceneNumber) =>{
    switch (sceneNumber) {
      case 0:
        return(
        <CurriculumOverviewScene1 advanceScene={advanceScene}/>
        )
      case 1:
        return(
          <CurriculumOverviewScene2 advanceScene={advanceScene}/>
        )
      case 2:
        return(
          <CurriculumOverviewScene3 advanceScene={advanceScene}/>
        )
      case 3:
        return(
          <CurriculumOverviewScene4 advanceScene={advanceScene} />
        )
      case 4:
        return(
          <CurriculumOverviewScene5 advancePage={advancePage} />
        )
      default:
        return(
          <p>Loading</p>
        )
    }
  }

  const advanceScene = () =>{
    setSceneNumber(sceneNumber + 1);
  }
  
  return(
    <CurriculumOverviewWrapper>
      {dynamicContent(sceneNumber)}
    </CurriculumOverviewWrapper>
  )
}
