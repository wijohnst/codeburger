import React from 'react'


import ComponentRefactor from './ComponentRefactor'

import CurriculumOverviewScene5 from './CurriculumOverviewScene5'
import About from './About'
import ToggleTest from './ToggleTest'

export default function App() {
  
  const testControl = '';
  
  if(testControl === 'test'){
    return (
      <CurriculumOverviewScene5 />
    )
  }else{
    return(
      <ComponentRefactor />
    )
  }
 
}
