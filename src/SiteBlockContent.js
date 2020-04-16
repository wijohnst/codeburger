import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function SiteBlockContent() {

  const SiteContentWrapper = styled(motion.div)`
  opacity: 0;
  `
  const AddressBar = styled.div`
    background-color: darkgrey;
    position: fixed;
    top: 5px;
    left: 4px;
    width: 95%;
    border-radius: 5px 5px 0px 0px;
    text-align: left;
  `
  const Tab = styled.div`
    background-color: #707070;
    display: inline-block;
    position: relative;
    height: 8px;
    width: 25px;
    overflow: hidden;
    color: #707070;
    border-radius: 2px 2px 0px 0px;
    box-shadow: 0px 1px 5px darkgrey;
    left: 2px;
    top: -4px;
  `
  const OmniBox= styled.div`
    background-color: #707070;
    position: relative;
    height: 10px;
    overflow: hidden;
    color: #707070;
    max-width: 95%;
    border-radius: 0px 2px 2px 0px;
    top: -9px;
    left: 2px;
  `
  const BrowserWindow = styled(motion.div)`
    background-color: white;
    max-width: 95%;
    position: fixed;
    left: 4px;
    width: 95%;
    top: 30px;
    height: 75%;
    color: black;
    border-radius: 0px 0px 5px 5px;
  `
  return (
    <SiteContentWrapper
      animate={{opacity: 1}}
      transition={{delay: 2, duration: 1}}
    >
      <AddressBar> 
        <Tab>Tab</Tab>
        <OmniBox>OmniBox</OmniBox>
      </AddressBar>
      <BrowserWindow>
        <p>CODEBURGER</p>
        <motion.p animate={{rotate: 90}}>{`{||||}`}</motion.p>
      </BrowserWindow>

    </SiteContentWrapper>
  )
}
