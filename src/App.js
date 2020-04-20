import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'

import CurriculumOverviewScene5 from './CurriculumOverviewScene5'
import DragTest2 from './Scratch/DragTest2'

export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <DragTest2 />
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

  

