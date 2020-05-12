import React from 'react'
import styled from 'styled-components'
import { getColor } from '../../../Utils/utilities'

import HtmlContent from './HtmlContent'

const ModalContentWrapper = styled.div`
  text-align: center;
  background-color: ${getColor('green')};
`
const HeaderWrapper = styled.div`
  padding: 10px;
`
const IconWrapper = styled.div`
  text-align: right;
`

export default function ModalContent(props) {

  const {destination, closeModal} = props;

  const destinationComponents = { 
    HTML : <HtmlContent />,
    CSS : <p>Resources Coming Soon</p>,
    JavaScript : <p>Resources Coming Soon</p>
  }

  return (
    <ModalContentWrapper>
      <HeaderWrapper>
        <IconWrapper>
          <i className="fas fa-window-close close-icon" onClick={() => closeModal()} />
        </IconWrapper>
        <h3>{destination} Resources</h3>
        {destinationComponents[destination]}
      </HeaderWrapper>
    </ModalContentWrapper>
  )
}
