import React, {useState} from 'react'
import styled from 'styled-components'

import SignUpForm2 from './SignUpForm2'

const SignUpFormWrapper = styled.form`
  background-color: white;
  /* border-radius: 5px; */
  padding: 5px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
`

const RadioInput = styled.input`
  max-width: 25%;
`
const RadioLabelGroup = styled.div`
  /* background-color: lightyellow; */
  margin: 5px;
`

const RadioGroup = styled.div`
  /* background-color: lightpink; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
export default function SignUpForm() {

  const [isService, setIsService] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [career, setCareer] = useState('');
 
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e =>{
    console.log('Submitted...')
    setIsSubmitted(true);

    const data = { "form-name": "sign-up", firstName, lastName, email, isService, career};
    console.log(data);
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data)
    })
    .then(()=> setIsSubmitted(true))
    .catch(error => console.log(error));

    e.preventDefault();
  }

  if(!isSubmitted){
  return (
      <SignUpFormWrapper onSubmit={handleSubmit}>
        <p>Join the CodeBurger mailing list.</p>
        <input type='text' name='firstName' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required/>
        <input type='text' name='lastName' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required/>
        <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
        <p>Do you usually work in the service industry?</p>
        <RadioGroup>
          <RadioLabelGroup>
            <label>Yes</label>
            <RadioInput type='radio' name='isService' onClick={() => setIsService(true)}/>
          </RadioLabelGroup>
          <RadioLabelGroup>
            <label>No</label>
            <RadioInput type='radio' name='isService' onClick={() => setIsService(false)} placeholder='No'/>
          </RadioLabelGroup>
        </RadioGroup>
        {isService !== null ? <SignUpForm2 isService={isService} setCareer={setCareer}/> : <p /> }
        <br />
        <button type="submit"> Join CodeBurger!</button>
      </SignUpFormWrapper>
    )
  }else{
    return(
      <div>
        <p>Thank you for joining CodeBurger!</p>
        <p> Check your email for updates on new classes, videos, and resources.</p>
        <p>-Chef Will <span role='img' aria-label='Chef emoji'>👨‍🍳</span></p>
      </div>
    )
  }

}
