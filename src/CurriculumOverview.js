import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import CurriculumOverviewScene1 from './CurriculumOverviewScene1'
import CurriculumOverviewScene2 from './CurriculumOverviewScene2'
import CurriculumOverviewScene3 from './CurriculumOverviewScene3'
import CurriculumOverviewScene4 from './CurriculumOverviewScene4'

export default function CurriculumOverview() {
  
  const [sceneNumber, setSceneNumber] = useState(0);

  const CurriculumOverviewWrapper = styled(motion.div)`
    background-color: white;
    border-radius: 5px 5px 5px 5px;
    width: 75%;
    margin: 0 auto;
  `

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
          <CurriculumOverviewScene4 />
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
      {/* <div onClick={advanceScene}>Continue</div> */}
    </CurriculumOverviewWrapper>

 
  )
}
