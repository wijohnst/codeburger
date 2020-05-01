import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'

export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <div>add</div>
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

  

