import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'
import ResourceOption from './Mobile/Resources/ResourcesScenes/ResourceOption'

export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <div>
        <ResourceOption backgroundColor={'lightpink'} text={'HTML'} shape={'triangle'} />
        <ResourceOption backgroundColor={'lightgreen'} text={'CSS'} shape={'circle'} />
        <ResourceOption backgroundColor={'pink'} text={'JavaScript'} shape={'square'} />
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

  

