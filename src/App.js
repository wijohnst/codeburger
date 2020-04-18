import React from 'react'


import DesktopLayout from './DesktopLayout'
import MobileLayout2 from './Mobile/MobileLayout2'

import CurriculumOverviewScene5 from './CurriculumOverviewScene5'
import MobileCardTab from './Components/MobileCardTab'

export default function App() {
  
  const testControl = 'desktop';
  
  if(testControl === 'test'){
    return (
      <MobileCardTab color={'#BC2423'} secondaryColor={'#23BC6A'}/>
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

  

