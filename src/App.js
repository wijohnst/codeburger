import React from 'react'


import ComponentRefactor from './ComponentRefactor'

import CurriculumOverviewScene1 from './CurriculumOverviewScene1'
import About from './About'

export default function App() {
  
  const testControl = '';
  
  if(testControl === 'test'){
    return (
      <About />
    )
  }else{
    return(
      <ComponentRefactor />
    )
  }
 
}
