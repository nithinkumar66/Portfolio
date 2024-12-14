import React from 'react';
import styled, { keyframes } from 'styled-components';  // Make sure to import 'styled' here
import PowerButton from '../subCompnents/PowerButton';
import LogoComponents from '../subCompnents/LogoComponents';
import Sociallcons from '../subCompnents/Sociallcons';

import { YinYang } from './AllSvgs';
import { useState } from 'react';
import Intro from './Intro';
const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2, h3, h4, h5, h6 {
    font-family: 'karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`
const Resume = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right:0;
  transform: translate(-50%,-50%) rotate(90deg);
  text-decoration: none;
  z-index: 1;
`


const WORK = styled.a`
  color:  ${props =>props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 42%;
  left: 2.6rem;
  transform: translate(-50%,-50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;

display: flex;
justify-content:space-evenly;
`
const ABOUT = styled.a`
  color: ${props =>props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const SKILLS = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const rotate = keyframes`
from{
 transform: rotate(0);
}
 to{
 transform: rotate(360deg);
 }
`

const Center = styled.button`
   position:absolute;
   top: ${props => props.click ?'85%':'50%'};
   left:${props => props.click ?'92%':'50%'};
   transform: translate(-50%,-50%);
   border: none;
   outline: none;
   background-color:transparent;
   cursor:pointer;

   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   transition: all 1s ease;

   &>:first-child{
   animation:${rotate} infinite 1.5s linear;
   }

   &>:last-child{
    display:${props => props.cilck ? 'none':'inline-block'};
    padding-top:1rem;
   }
`
const DarkDiv = styled.div`
position:absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width:${props => props.click ? '50%':'0%'};
height:${props => props.click ? '100%':'0%'};
z-index:1;
transition : height 0.5s ease,width 1s ease 0.5s;

`

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponents theme={click ? "dark" : "light"} />
        <Sociallcons theme={click ? "dark" : "light"} />
         
         
         

         <Center click={click} > 
          <YinYang onClick={() => handleClick()} width={click ? 120:200}height={click ? 120 : 200}fill='currentColor'/>
          <span>Click here</span>
         </Center>
        
        <Contact href="mailto:katiganithinkumar@gmail.com" target="_blank" rel="noopener noreferrer">
        <h2
                
                >Say Hello....</h2>
        </Contact>
        <Resume href="https://drive.google.com/file/d/1-0WFRghOTx9NRqfujoGd5fA-Osyb7qT9/view?usp=sharing" target="_blank" >
          <h2>Resume</h2>   
        </Resume>
        <WORK href="/work" click={click} >
          <h2>Projects</h2>
        </WORK>
        <BottomBar>
          <ABOUT href="/about"click={click} >
           <h2>About</h2>
          </ABOUT>
          <SKILLS href="/skills">
              <h2>My Skills</h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
