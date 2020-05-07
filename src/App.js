import React from 'react'
import MobileLayout from './Mobile/MobileLayout'


export default function App() {
  
  const testControl = 'mobile';
  
  if(testControl === 'test'){
    return (
      <div>
        
      </div>
      
      
    )
  }else if(testControl === 'mobile'){
     return( 
      <MobileLayout />
     )
  }
}

  

