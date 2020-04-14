import React from 'react'

import Parent from './Parent'

export default function ChildrenTest() {
  return (
    <div>
      <Parent backgroundColor={"#707070"}>
        <h1> child #1 </h1>
      </Parent>
      <Parent backgroundColor={"lightpink"}>
        <h1> child #2 </h1>
      </Parent>
    </div>
  )
}
