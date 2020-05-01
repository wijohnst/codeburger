import React from 'react'

import ClickGallery from '../../ClickGallery/ClickGallery'

import Scene1 from './About_Scenes/AboutScene1'
import Scene2 from './About_Scenes/AboutScene2'
import Scene3 from './About_Scenes/AboutScene3'
import Scene4 from './About_Scenes/AboutScene4'
import Scene5 from './About_Scenes/AboutScene5'
import Scene6 from './About_Scenes/AboutScene6'
import Scene7 from './About_Scenes/AboutScene7'
import Scene8 from './About_Scenes/AboutScene8'
import Scene9 from './About_Scenes/AboutScene9'
import Scene10 from './About_Scenes/AboutScene10'
import Scene11 from './About_Scenes/AboutScene11'


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

export default function AboutMobile({updateOpen}) {

  return (
    <div>
      <ClickGallery scenes={[
                        <Scene1 variants={variants} />, 
                        <Scene2 variants={variants} />,
                        <Scene3 variants={variants} />,
                        <Scene4 variants={variants} />,
                        <Scene5 variants={variants} />,
                        <Scene6 variants={variants} />,
                        <Scene7 variants={variants} />,
                        <Scene8 variants={variants} />,
                        <Scene9 variants={variants} />,
                        <Scene10 variants={variants} />,
                        <Scene11 variants={variants} />
                        ]} updateOpen={updateOpen} indexNumber={0}/>
    </div>
  )
}
