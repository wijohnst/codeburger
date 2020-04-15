import React from 'react'


import ComponentRefactor from './ComponentRefactor'

import HowItWorks from './HowItWorks'

export default function App() {
  
  const testControl = '';
  
  if(testControl === 'test'){
    return (
      <HowItWorks />
    )
  }else{
    return(
      <ComponentRefactor />
    )
  }
 
}
