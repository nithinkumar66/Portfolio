import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {LightTheme} from './Themes';
import {Develope} from './AllSvgs';
import ParticlesComponent from '../subCompnents/ParticlesComponent';

import LogoComponents from '../subCompnents/LogoComponents';
import Sociallcons from '../subCompnents/Sociallcons';
import PowerButton from '../subCompnents/PowerButton';
import BigTitlte from "../subCompnents/BigTitlte.js";


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
margin-right: 1rem;
margin-bottom:0;

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
margin-top: 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 6px;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
    margin-right: 1rem;
    margin-top:2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={LightTheme}>
<Box>

<LogoComponents theme='light'/>
<Sociallcons theme='light'/>
<PowerButton />
<ParticlesComponent theme='light' />

<Main>
<Title>
     Programming Skills
</Title>
<Description>
<strong>Programming languages</strong>
<p>
<ul>
    <li>
        Java
    </li>
    <li>
        Python
    </li>
    <li>
       C/C++
    </li>
    <li>
       Problem Solving : DSA with C++
    </li>
</ul>
</p>
</Description>


            </Main>
            <Main>
<Title>
    <Develope width={30} height={30} /> Frontend & Backend 
</Title>

<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React,Node js, Tailwind, Firebase.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, MS office.
</p>
</Description>

            </Main>

            <BigTitlte text="Skills" top="80%" right="30%" />
        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage