import React, { useEffect } from 'react'

export default function FinalScene(props) {
  let {updateOpen, indexNumber} = props;
  
  useEffect(() => {
    console.log(indexNumber)
    updateOpen(indexNumber)
  })

  return (
    <div />
  )
}
