import React from 'react'

export default function SignUpForm2(props) {
  
  const {isService, form, setCareer} = props;

  const options = ['Please select a position','Chef / Cook / BOH', 'Server / S.A. / Busser / Host / FOH', 'BOH Manager', 'FOH Manager', 'Owner', 'Other'];

  if(isService){
    return (
      <form name="sign-up">
        <p>I'm a...</p>
        <select form={form} onChange={(e) => setCareer(e.target.value)}>
          {options.map(option => {
            return(
            <option key={option} value={option}> {option }</option>
            )
          })}
        </select>
      </form>
    )
  }else{
    return(
      <form name="sign-up">
        <p>What do you do?</p>
        <input type='text' name='employment_input' onChange={(e) => setCareer(e.target.value)}></input>
      </form>
    )
  }
    
}
