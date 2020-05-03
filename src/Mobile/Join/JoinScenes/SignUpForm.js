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
        <p>First name:</p>
        <input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)} />
        <p> Last name:</p>
        <input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)} />
        <p>Email:</p>
        <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
        <p>Do you usually work in the service industry?</p>
        <input type='radio' name='isService' onClick={() => setIsService(true)}/>
        <label>Yes</label>
        <input type='radio' name='isService' onClick={() => setIsService(false)}/>
        <label>No</label>
        {isService !== null ? <SignUpForm2 isService={isService} setCareer={setCareer}/> : <p /> }
        <br />
        <button type="submit"> Join CodeBurger!</button>
      </SignUpFormWrapper>
    )
  }else{
    return(
      <p>Success!</p>
    )
  }

}
