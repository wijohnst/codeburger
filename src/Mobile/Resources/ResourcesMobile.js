import React from 'react'

import ClickGallery from '../../ClickGallery/ClickGallery'

import ResourcesScene1 from './ResourcesScenes/ResourcesScene1'

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
    <div>
      <ClickGallery scenes={[
                        <ResourcesScene1 variants={variants} />, 
                        ]} updateOpen={updateOpen} indexNumber={1}/>
    </div>
  )
}
