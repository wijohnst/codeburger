import React, { useState } from 'react'
import styled from 'styled-components'

import MobileCard from './About/MobileCard'
import ScrollLogo from '../ScrollLogo'
import MobileCardTab from './MobileCardTab'

import AboutMobile from './About/AboutMobile'
import ScheduleMobile from './Schedule/ScheduleMobile'  
import ResourcesMobile from './Resources/ResourcesMobile'
import JoinMobile from'./Join/JoinMobile'

const CardTabWrapper = styled.div`
`
const AppViewWrapper = styled.div`
max-width: 500px;  
margin: 0 auto;
`
export default function MobileLayout2() {
  
  const [isOpen, setIsOpen] = useState([true,true,true,true]);

  const updateOpen = (targetCard) =>{
   
    const openArray = [...isOpen];

    let currentState = openArray[targetCard];

    openArray[targetCard] = !currentState;
    
    setIsOpen(openArray);
  }

  const sectionHeadings = ['About', 'Schedule', 'Resources', 'Join'];
  const sectionContent = [<AboutMobile  updateOpen={updateOpen}/>,<ScheduleMobile updateOpen={updateOpen} />,<ResourcesMobile updateOpen={updateOpen} />,<JoinMobile updateOpen={updateOpen} />];
  const sectionColors=['#23BC6A','#BC2423','#FCEE21','#534741'];
  const secondaryColors =['white','#23BC6A','#BC2423','#FCEE21'];

  return (
    <AppViewWrapper>
      <ScrollLogo />
      <CardTabWrapper>
      {isOpen.map((element, index) =>{
            return(
                <React.Fragment key={`Fragment ${index}`}>
                  <div 
                    key={`button ${index}`} 
                    onClick={() => updateOpen(index)}
                  >
                    <MobileCardTab 
                    color={sectionColors[index]}
                    secondaryColor={secondaryColors[index]}
                    >
                      {sectionHeadings[index]}
                    </MobileCardTab>
                  </div>
                  <MobileCard 
                    key={`MobileCard ${index}`} 
                    isOpen={element}
                    color={sectionColors[index]}
                    >
                      {sectionContent[index]}
                  </MobileCard>
                </React.Fragment>
            )
          }
        )
      }
      </CardTabWrapper>
    </AppViewWrapper>
  )
}
