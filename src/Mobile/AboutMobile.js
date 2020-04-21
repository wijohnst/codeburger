import React from 'react'

import Gallery from './Gallery'

import Scene1 from './About_Scenes/Scene1'
import Scene2 from './About_Scenes/Scene2'
import Scene3 from './About_Scenes/Scene3'
import Scene4 from './About_Scenes/Scene4'

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

export default function AboutMobile() {

  return (
    <div>
      <Gallery scenes={[<Scene1 variants={variants} />, 
                        <Scene2 variants={variants} />,
                        <Scene3 variants={variants} />,
                        <Scene4 variants={variants} />
                        ]}/>
    </div>
  )
}
