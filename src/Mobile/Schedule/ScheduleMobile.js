import React from 'react'

import ClickGallery from '../../ClickGallery/ClickGallery'

import ScheduleScene1 from './Schedule_Scenes/ScheduleScene1'
import ScheduleScene2 from './Schedule_Scenes/ScheduleScene2'
import ScheduleScene3 from './Schedule_Scenes/ScheduleScene3'

const variants={
  pre:{
    x: -400,
    opacity: 0
  },
  enter:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  },
  exit:{
    x: 400,
    opacity: 0
  }
}

export default function ScheduleMobile({updateOpen}) {

  return (
      <ClickGallery scenes={[
                        <ScheduleScene1 variants={variants} />, 
                        <ScheduleScene2 variants={variants} />,
                        <ScheduleScene3 variants={variants} />
                        ]} updateOpen={updateOpen} indexNumber={1}/>
  )
}
