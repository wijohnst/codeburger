import React, { useState } from 'react'



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
  const [scene, setScene] = useState(0);

  if(scene === 0){
    return (
      <ResourcesScene1 />
    )
  }
  
}
