import React from 'react'

import ClickGallery from '../../ClickGallery/ClickGallery'

import AboutScene1 from './About_Scenes/AboutScene1'
import AboutScene2 from './About_Scenes/AboutScene2'
import AboutScene3 from './About_Scenes/AboutScene3'
import AboutScene4 from './About_Scenes/AboutScene4'
import AboutScene5 from './About_Scenes/AboutScene5'
import AboutScene6 from './About_Scenes/AboutScene6'
import AboutScene7 from './About_Scenes/AboutScene7'
import AboutScene8 from './About_Scenes/AboutScene8'
import AboutScene9 from './About_Scenes/AboutScene9'
import AboutScene10 from './About_Scenes/AboutScene10'
import AboutScene11 from './About_Scenes/AboutScene11'

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
      <ClickGallery scenes={[
                        <AboutScene1 variants={variants} />, 
                        <AboutScene2 variants={variants} />,
                        <AboutScene3 variants={variants} />,
                        <AboutScene4 variants={variants} />,
                        <AboutScene5 variants={variants} />,
                        <AboutScene6 variants={variants} />,
                        <AboutScene7 variants={variants} />,
                        <AboutScene8 variants={variants} />,
                        <AboutScene9 variants={variants} />,
                        <AboutScene10 variants={variants} />,
                        <AboutScene11 variants={variants} />
                        ]} updateOpen={updateOpen} indexNumber={0}/>
  )
}
