import React, { useState } from 'react'



import ResourcesScene1 from './ResourcesScenes/ResourcesScene1'

export default function ScheduleMobile({updateOpen}) {
  const [scene] = useState(0);

  if(scene === 0){
    return (
      <ResourcesScene1 />
    )
  }
  
}
