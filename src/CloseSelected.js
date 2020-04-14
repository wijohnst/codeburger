import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import CloseViewIcon from './close_view.svg'

export default function CloseSelected({handleClick}) {
  
  const IconContainer = styled(motion.div)`
    height: 25px;
    width: 25px;
  `
  return (
    <IconContainer onClick={handleClick} whileHover={{boxShadow: '2px 2px 2px #707070'}} whileTap={{boxShadow: 'inset 2px 2px 2px #707070'}}>
      <img src={CloseViewIcon} alt='Close View Icon' />
    </IconContainer>
  )
}
