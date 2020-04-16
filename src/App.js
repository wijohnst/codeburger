import React from 'react'


import ComponentRefactor from './ComponentRefactor'

import CurriculumOverviewScene4 from './CurriculumOverviewScene4'


export default function App() {
  
  const testControl = '';
  
  if(testControl === 'test'){
    return (
      <CurriculumOverviewScene4 />
    )
  }else{
    return(
      <ComponentRefactor />
    )
  }
 
}
