import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../../../fonts/Font.scss';

import menu from '../../../imageassets/Menu1.jpg';

const screenWidth = window.screen.width;

const scroll1 = keyframes`
    from {
        transform : translateX(-50%);
    }
    top {
        transform : translateX(100%);
    }
`;

const scroll2 = keyframes`
    from {
        transform : translateX(0);
    }
    to {
        transform : translateX(-100%);
    }
`;

const Header = styled.div`
  height: 25vw;
  width: 100%;
  background-color: #ff6df0;
  overflow: hidden;

  @media (max-width: 479px) {
    height: 30vw;
  }
`;

const Text1 = styled.div`
  font-size: 1.5vw;
  transform: rotate(-30deg) translate(0, -25vw);
  opacity: 0.5;
  color: #fa47e8;
  font-family: Circular;
  font-weight: bold;
  font-style: italic;
  display: relative;
  line-height: 1.5vw;

  div {
    animation: ${scroll1} 7s linear infinite;
  }
`;

const Text2 = styled.div`
  font-size: 2vw;
  transform: rotate(-30deg) translate(-30vw, -22vw);
  opacity: 0.5;
  color: #fa47e8;
  font-family: Circular;
  font-weight: bold;
  font-style: italic;
  line-height: 2vw;

  div {
    animation-delay: -10s;
    animation: ${scroll2} 10s linear infinite;
  }
`;

const Text3 = styled.div`
  font-size: 3vw;
  transform: rotate(-30deg) translate(50vw, -18vw);
  opacity: 0.5;
  color: #fa47e8;
  font-family: Circular;
  font-weight: bold;
  font-style: italic;
  line-height: 2.5vw;

  div {
    animation: ${scroll1} 8s linear infinite;
    animation-delay: 0;
  }
`;

const WavesText = styled.div`
  position: absolute;
  color: #2f0b4b;
  font-size: 2vw;
  transform: translate(3vw, -51vw);
  font-family: Babas-Neue;
  font-weight: bold;

  @media (max-width: 479px) {
    transform: translate(3vw, 20vw);
    font-size: 6vw;
  }
`;

const MenuButton = styled.button`
    color : #2F0B4B;
    -webkit-text-stroke-width: 1px;
    -webkit-text-fill-color: #FF6DF0;
    font-family : Circular;
    font-style : italic;
    font-weight : 900;
    transform : translate(87vw,-70vw);
    font-size : 2vw;
    background-color : transparent;
    border : 0px;

    ${
      '' /* @media(max-width : 479px){
        transform : translate(80vw,2vw);
        line-height : 1vw;
        ${'' /* font-size : 4vw;
        -webkit-text-fill-color:  #2F0B4B;
        -webkit-text-stroke-width: 0px; */
    }

        img {
            width : 8vw;
            display : block;
        }
    }   */}
`;

const MenuMobView = styled.img`
  transform: translate(90vw, 2vw);
  width: 8vw;
`;

function EventHeader(props) {
  if (screenWidth >= 479) {
    return (
      <Header>
        <Text1>
          <div>
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
          </div>
        </Text1>
        <Text2>
          <div>
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
          </div>
        </Text2>
        <Text3>
          <div>
            {props.text1}
            {props.text1}
            {props.text1}
            <br />
            {props.text2}
            {props.text2}
            {props.text2}
            <br />
            {props.text1}
            <br />
            {props.text2}
            <br />
            {props.text1}
            <br />
            {props.text2}
            <br />
            {props.text1}
            <br />
            {props.text2}
            <br />
            {props.text1}
            <br />
            {props.text2}
            <br />
            {props.text1}
            <br />
            {props.text2}
          </div>
        </Text3>
        <WavesText>WAVES/EVENTS</WavesText>
        <MenuButton>MENU →</MenuButton>
      </Header>
    );
  }

  return (
    <Header>
      {/* <Text1><div>{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}</div></Text1> */}
      {/* <Text2><div>{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}</div></Text2> */}
      {/* <Text3><div>{props.text1}{props.text1}{props.text1}<br />{props.text2}{props.text2}{props.text2}<br />{props.text1}<br />{props.text2}<br />{props.text1}<br />{props.text2}<br />{props.text1}<br />{props.text2}<br />{props.text1}<br />{props.text2}<br />{props.text1}<br />{props.text2}</div></Text3> */}
      <WavesText>WAVES/EVENTS</WavesText>
      <MenuMobView src={menu} />
      {/* <br /> 
                <MenuMobView src = {menu}></MenuMobView>
                <br /> 
                <MenuMobView src = {menu}></MenuMobView>      */}
    </Header>
  );
}

export default EventHeader;
