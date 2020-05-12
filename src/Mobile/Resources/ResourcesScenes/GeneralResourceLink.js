import React from 'react'
import styled from 'styled-components'

const GeneralResourceLinkWrapper = styled.div`
  /* background-color: white; */
  max-width: 75%;
  /* border-radius: 10px; */
  /* box-shadow: 5px 7px 12px rgba(0,0,0,0.5); */
  padding: 10px;
  margin: 0 auto;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`

export default function GeneralResourceLink(props) {
  
 const {link, description, type} = props.link

 const Icons ={
   webpage : <i className="far fa-file-alt" />,
   video : <i className="fab fa-youtube" />
 }

  return (
    <GeneralResourceLinkWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{textAlign : "left", textDecoration : 'none'}}>{description}</a>
      {Icons[type]}
    </GeneralResourceLinkWrapper>
      
    
  )
}
