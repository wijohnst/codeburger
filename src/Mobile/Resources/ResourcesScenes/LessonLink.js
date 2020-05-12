import React, { useState } from 'react'
import styled from 'styled-components'

const LessonLinkWrapper = styled.div`
`
const ResourceWrapper = styled.div`
  padding: 2px;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: 400;
  &:hover{
    color: white;
    cursor: pointer;
  }
`
const LessonHeading = styled.p`
  font-size: 1em;
  font-weight: 350;
  &:hover{
    cursor: pointer;
  }
`

export default function LessonLink(props) {

  const [didClick, setDidClick] = useState(false);

  const {lessonNumber, codeLinks} = props.link;
  return (
    <LessonLinkWrapper>
      <LessonHeading onClick={() => setDidClick(!didClick)}><u>Links for Lesson #{lessonNumber}</u></LessonHeading>
      {didClick ? codeLinks.map((link,index) =>(
      <ResourceWrapper key={`lessonLink${index}`}>
         <Link href={link.link} target="_blank">{link.description}</Link>
      </ResourceWrapper>)) : " "}
    </LessonLinkWrapper>
  )
}
