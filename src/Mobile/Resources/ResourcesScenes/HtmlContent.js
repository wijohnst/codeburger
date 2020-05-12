import React from 'react'
import styled from 'styled-components'

import { getLinks } from '../../../Utils/getLinks'

import GeneralResourceLink from './GeneralResourceLink'
import LessonLink from './LessonLink'

const HtmlContentWrapper = styled.div`
  
`
const LinksHeader = styled.p` 
  font-size: 1em;
  font-weight: 400;
`

export default function HtmlContent() {

  const generalLinks = getLinks('generalLinks','HTML');
  const lessonLinks = getLinks('lessonLinks', 'HTML');

  return (
    <HtmlContentWrapper>
      <LinksHeader>General Links</LinksHeader>
      {generalLinks.map( (link,index) => (
        <GeneralResourceLink key={`ResourceLink${index}`} link={link} />
      ))}
      <LinksHeader>Links By Lesson</LinksHeader>
      {lessonLinks.map((link, index) =>(
        <LessonLink key={`lessonLink${index}`} link={link} />
      ))}

    </HtmlContentWrapper>
  )
}
