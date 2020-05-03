import React, {useState} from 'react'
import styled from 'styled-components'

import SignUpForm2 from './SignUpForm2'

const SignUpFormWrapper = styled.form`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`
export default function SignUpForm() {

  // const [isService, setIsService] = useState(null);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // let handleSelect = (value) =>{
  //   setIsService(value);
  // }

  return (
    <SignUpFormWrapper name='sign-up' method='post'>
      <input type="hidden" name="sign-up" value="sign-up" />
      <p>
        <label>First Name: <input type='text' name='first-name' /></label>
      </p>
      <p>
        <label>Last Name: <input type='text' name='last-name' /></label>
      </p>
      <p>
        <label>Email: <input type='email' name='email' /></label>
      </p>
      {/* <p> Do you typically work in the service industry?</p>
      <input type='radio' name='is_service' id='is_service_true' value='true' onChange={() => handleSelect(true)}/>
        <label> Yes </label>
      <input type='radio' name='is_service' id='is_service_false' value='false' onChange={() => handleSelect(false)}/>
        <label> No </label>
      {isService === null ? <p /> : <SignUpForm2 isService={isService} form={'sign-up'}/>}<br />
      <button type='submit' onClick={() => setIsSubmitted(true)}>Submit</button> */}
      <button type='submit'>Submit</button>
    </SignUpFormWrapper>
  )
}
