import React from 'react'


import ComponentRefactor from './ComponentRefactor'

import About from './About'
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
