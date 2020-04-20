import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function WillHistory({textAlign}) {
  
  const HistoryWrapper = styled.div`
    text-align: ${textAlign}
  `
  return (
    <HistoryWrapper>
      <p>I started my first kitchen job at 14-years-old. That same year, I started learning my first programming language, HTML; a language that remains one of the fundamental building blocks of the modern web.I didn't know it at the time, but <i> cooking and coding </i> would become my duel passions in life.</p>
    </HistoryWrapper>
  )
}
