import React from 'react';
import { Github, Twitter, Facebook, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child){
  margin: 0.5rem 0;
}
`

const Line = styled.div`
width: 2px;
height: 8rem;
background-color: ${ props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body };
`

const Sociallcons = (props) => {


  return (
    <Icons>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nithinkumar66"
        >
          <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/shorts/o_6gH9yxiFg"
        >
          <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/shorts/o_6gH9yxiFg"
        >
          <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/shorts/o_6gH9yxiFg"
        >
          <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <div>
      <Line color={props.theme} />
      </div>
    </Icons>
  );
};


export default Sociallcons;