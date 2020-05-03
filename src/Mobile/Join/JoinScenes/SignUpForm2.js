import React from 'react'
import styled from 'styled-components'

export default function SignUpForm2(props) {
  
  const {isService, form} = props;

  const options = ['Chef / Cook / BOH', 'Server / S.A. / Busser / Host / FOH', 'BOH Manager', 'FOH Manager', 'Owner', 'Other'];

  if(isService){
    return (
      <div>
        <p>I'm a...</p>
        <select form={form}>
          {options.map(option => {
            return(
            <option key={option} value={option}> {option }</option>
            )
          })}
        </select>
      </div>
    )
  }else{
    return(
      <div>
        <p>What do you do?</p>
        <input type='text' name='employment_input'></input>
      </div>
    )
  }
    
}
