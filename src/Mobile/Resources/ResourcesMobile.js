import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

import ResourcesScene1 from './ResourcesScenes/ResourcesScene1'
import ModalContent from './ResourcesScenes/ModalContent'

const ResourcesMobileWrapper = styled.div`
  
`
export default function ScheduleMobile({updateOpen}) {
  const [scene] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDestination, setDestination] = useState('');

  const handleClick = (click) =>{
    setIsOpen(true);
    setDestination(click)
  }

  const closeModal = () =>{
    setIsOpen(false);
  }

  const modalStyle={
    content: {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%,-50%)'
    }
  }

  Modal.setAppElement('#root');

  if(scene === 0){
    return (
      <ResourcesMobileWrapper>
      <Modal isOpen={modalIsOpen} style={modalStyle}>
        <ModalContent destination={modalDestination} closeModal={closeModal}/>
      </Modal>
      <ResourcesScene1 handleClick={handleClick} />
      </ResourcesMobileWrapper>
    )
  }
  
}
