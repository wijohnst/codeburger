import React, {useState} from 'react'
import styled from 'styled-components'

import SignUpForm2 from './SignUpForm2'

const SignUpFormWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`
export default function SignUpForm() {

  const [isService, setIsService] = useState(null);

  let handleSelect = (value) =>{
    setIsService(value);
  }

  return (
    <SignUpFormWrapper name='sign-up' method='POST' data-netlify='true'>
      <p>
        <label>First Name: <input type='text' name='first-name' /></label>
      </p>
      <p>
        <label>Last Name: <input type='text' name='last-name' /></label>
      </p>
      <p>
        <label>Email: <input type='text' name='email' /></label>
      </p>
      <p> Do you typically work in the service industry?</p>
      <input type='radio' name='is_service' id='is_service_true' value='true' onChange={() => handleSelect(true)}/>
        <label> Yes </label>
      <input type='radio' name='is_service' id='is_service_false' value='false' onChange={() => handleSelect(false)}/>
        <label> No </label>
      {isService === null ? <p /> : <SignUpForm2 isService={isService} form={'sign-up'}/>}
    </SignUpFormWrapper>
  )
}
