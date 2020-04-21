import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'

import ClickGallery from './Scratch/ClickGallery/ClickGallery'

import Scene1 from './Mobile/About_Scenes/Scene1'
import Scene2 from './Mobile/About_Scenes/Scene2'

export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <ClickGallery scenes={[<Scene1 />,<Scene2 />]}/>
    )
  }else if(testControl === 'desktop'){
    return(
      <DesktopLayout />
    )
  }else if(testControl === 'mobile'){
     return( 
      <MobileLayout2 />
     )
  }
}

  

