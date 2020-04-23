import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MobileCard2 from './MobileCard2'
import ScrollLogo from '../ScrollLogo'
import MobileCardTab2 from './MobileCardTab2'
import AboutMobile from './AboutMobile'

import AboutImage from '../about_image.png'
import Image from '../Image'

export default function MobileLayout2() {
  
  const [isOpen, setIsOpen] = useState([false,false,false,false]);

  const updateOpen = (targetCard) =>{
    console.log(`Target Card = ${targetCard + 1}`);

    const openArray = [...isOpen];

    let currentState = openArray[targetCard];

    console.log(!currentState);

    openArray[targetCard] = !currentState;
    
    setIsOpen(openArray);
  }

  const sectionHeadings = ['About', 'Schedule', 'Resources', 'Join'];
  const sectionContent = [<AboutMobile  updateOpen={updateOpen}/>,'','','']
  const sectionColors=['#23BC6A','#BC2423','#FCEE21','#534741'];
  const secondaryColors =['white','#23BC6A','#BC2423','#FCEE21'];

  

  const CardTabWrapper = styled.div`
    position: relative;
    top: 80px;
  `

  return (
    <React.Fragment>
      <ScrollLogo />
      <CardTabWrapper>
      {isOpen.map((element, index) =>{
            return(
                <React.Fragment key={`Fragment ${index}`}>
                  <div 
                    key={`button ${index}`} 
                    onClick={() => updateOpen(index)}
                  >
                    <MobileCardTab2 
                    color={sectionColors[index]}
                    secondaryColor={secondaryColors[index]}
                    >
                      {sectionHeadings[index]}
                    </MobileCardTab2>
                  </div>
                  <MobileCard2 
                    key={`MobileCard ${index}`} 
                    isOpen={element}
                    color={sectionColors[index]}>
                      {sectionContent[index]}
                  </MobileCard2>
                </React.Fragment>
            )
          }
        )
      }
      </CardTabWrapper>
    </React.Fragment>
  )
}
