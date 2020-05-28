import React from 'react';
import styled from 'styled-components';
import './register_button.scss';

import arrow from '../../../imageassets/Arrow1.jpg';

const Button = styled.div`
  display: flex;
  align-self: left;
  margin-top: 10%;
  margin-left: 5%;
  width: max-content;
  height: max-content;
  * {
    margin: 0;
  }

  @media (max-width: 991px) {
    margin-top: 3vh;
  }

  @media (max-width: 770px) {
    margin-top: 15vh;
  }

  @media (max-width: 479px) {
    margin-top: 27.5vh;
  }
`;

const Link = styled.a`
  color: none;
`;

const RegisterText = styled.div`
  color: #ebebfc;
  font-family: 'GT-America-Extended-Bold';
  margin-left: 4vw;
  font-size: 6vw;
  line-height: 4.5vw;
  transform: translate(10%, -25%);

  -webkit-transition: margin-left 0.25s;

  @media (max-width: 991px) {
    font-size: 7vw;
    margin-left: 6vw;
    line-height: 5.3vw;
  }

  @media (max-width: 770px) {
    font-size: 8.5vw;
    line-height: 6.5vw;
    margin-left: 8vw;
  }
  @media (max-width: 479px) {
    font-size: 12.5vw;
    line-height: 9.3vw;
    margin-left: 15vw;
  }

  ${Button}:hover & {
    margin-left: 1vw;
    transition: all 0.25s ease-in;
  }
`;

const ParticipateText = styled.div`
  color: #ff6df0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  margin-top: -7vw;
  font-size: 6vw;
  line-height: 4.5vw;
  font-family: 'Circular-Std-Regular';
  font-style: italic;
  opacity: 0.9;

  -webkit-transition: margin-left 0.25s;

  @media (max-width: 991px) {
    font-size: 7vw;
    line-height: 5.3vw;
    margin-top: -8vw;
  }

  @media (max-width: 770px) {
    font-size: 8.5vw;
    line-height: 6.5vw;
    margin-top: -10vw;
  }

  @media (max-width: 479px) {
    font-size: 12.5vw;
    line-height: 9.3vw;
    margin-top: -17vw;
  }

  ${Button}:hover & {
    margin-left: 10%;
    transition: all 0.25s ease-in;
  }
`;

const Arrows = styled.img`
  width: 6vw;
  margin-left: 35vw;
  line-height: 5vw;
  transform: translate(0, -13vw);

  @media (max-width: 991px) {
    margin-left: 40vw;
    transform: translate(0, -16vw);
    line-height: 5vw;
    width: 7vw;
  }

  @media (max-width: 770px) {
    width: 8.5vw;
    line-height: 5vh;
    margin-left: 45vw;
    transform: translate(0, -19vw);
  }

  @media (max-width: 479px) {
    width: 12.5vw;
    margin-left: 70vw;
    transform: translate(0, -24vw);
    line-height: 4.5vh;
  }
`;

function RegisterButton() {
  return (
    <Button>
      <Link href='./../../../index.js'>
        <RegisterText>
          <span>
            REG
            <br />
            ISTER
          </span>
        </RegisterText>
        <ParticipateText>
          <span>
            PART
            <br />
            ICIPATE
          </span>
          <div>
            <Arrows src={arrow} />
            <br />
            <Arrows src={arrow} />
          </div>
        </ParticipateText>
      </Link>
    </Button>
  );
}

export default RegisterButton;
