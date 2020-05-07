import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'
import ResourceOption from './Mobile/Resources/ResourcesScenes/ResourceOption'
import AboutScene6 from './Mobile/About/About_Scenes/BlockAnimation/MobileSiteIllustration'

export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <div>
        <AboutScene6 />
      </div>
      
      
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

  

