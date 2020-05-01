import React, { useState } from 'react'
import styled from 'styled-components'
import { motion} from 'framer-motion'

import Label from './Label'
import CloseSelected from './CloseSelected'

const LabelWrapper = styled(motion.div)``

const CloseIconWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`
const Content = styled(motion.div)`
  opacity: 0;
`

export default function NavOption(props) {

  let {textContent, condition, justification, color} = props;
  let [selected, setSelected] = useState(false);


  const handleClick = () =>{
    setSelected(!selected);
  }

  const preSelectedVariants={
    initial:{
      color: `${color}`,
      height: '15%'
    },
    end:{
      color: 'white',
      transition:{
        duration: 1,
        ease: 'easeIn'
      },
    }
  }

  const selectedVariants={
    initial:{
      height: '15%'
    },
    end:{
      height: '100%',
      overflow: 'scroll',
      boxShadow: '3px 7px 12px #707070',
      transition:{
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  const LabelVariants={
    initial:{
      
    },
    end:{
      position: 'relative',
      top: '20px'
    }
  }
  
  const Wrapper = styled(motion.div)`
    border-radius: 5px 5px 5px 5px;
    background-color: ${color};
    margin-top: 10px;
    padding-left: 10px;
  `

  if(selected){
    return(
      <Wrapper
        variants={selectedVariants}
        initial={'initial'}
        animate={selected ? 'end' : 'initial'}
      >
      <CloseIconWrapper>
        <CloseSelected handleClick={handleClick} />
      </CloseIconWrapper>
      <Content animate={{opacity: 1}} transition={{delay: 1, duration: 1, ease:'easeIn'}}>
        {props.children}
      </Content>
      </Wrapper>
    )
  }
  else{
  return (
      <Wrapper 
      variants={preSelectedVariants}
      initial={'initial'}
      onClick={handleClick}
      whileHover={{boxShadow: '5px 5px 12px #707070', color: 'black'}}>
      <LabelWrapper
      variants={LabelVariants}
      initial={'initial'}
      >
        <Label
          displayText={textContent.label} 
          condition={condition}
          align={justification}
        />
      </LabelWrapper>
      </Wrapper>
    )
  }
}
