import React, { useState } from 'react'

import JoinScene1 from './JoinScenes/JoinScene1'

export default function JoinMobile({updateOpen}) {
  const [scene] = useState(0);

  if(scene === 0){
    return (
      <JoinScene1 />
    )
  }
  
}
