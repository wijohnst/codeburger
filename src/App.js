import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'

import ClickGallery from './Scratch/ClickGallery/ClickGallery'

import Scene1 from './Mobile/About_Scenes/Scene1'
import Scene2 from './Mobile/About_Scenes/Scene2'

import MobileSiteBlocks from './Mobile/About_Scenes/BlockAnimation/MobileSiteBlocks'

export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <MobileSiteBlocks />
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

  

