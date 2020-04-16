import React from 'react'


import ComponentRefactor from './ComponentRefactor'

import CurriculumOverview from './CurriculumOverview'

export default function App() {
  
  const testControl = '';
  
  if(testControl === 'test'){
    return (
      <CurriculumOverview />
    )
  }else{
    return(
      <ComponentRefactor />
    )
  }
 
}
