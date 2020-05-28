import React from 'react';
import styled from 'styled-components';

const screenWidth = window.screen.width;

const Titleholder = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 15vw;
  align-self: flex-end;

  @media (max-width: 991px) {
    width: 750px;
  }

  @media (max-width: 770px) {
    width: 575px;
  }

  @media (max-width: 479px) {
    width: 100%;
    height: 150px;
    margin: 0px;
    position: relative;
  }
`;

const EventType = styled.div`
  position: absolute;
  color: #ebebfc;
  line-height: 77%;
  text-align: right;
  font-size: 7vw;
  margin-top: 0px;
  font-family: 'GT-America-Extended-Bold';
  margin-left: auto;
  align-self: flex-end;
  margin-right: 32px;

  @media (max-width: 991px) {
    font-size: 7.2vw;
  }

  @media (max-width: 770px) {
    font-size: 8vw;
    transform: translate(-6vw, 0);
  }

  @media (max-width: 479px) {
    font-size: 9vw;
    transform: translate(0, 14vw);
  }
`;

const EventCategory = styled.div`
  position: absolute;
  color: #ff6df0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  font-size: 7vw;
  margin-top: -3.5vw;
  margin-left: -20vw;
  font-family: 'Circular-Std-Regular';
  font-style: italic;
  font_weight: bold;
  line-height: 5.5vw;
  align-self: flex-end;
  text-align: left;

  @media (max-width: 991px) {
    font-size: 7.2vw;
  }

  @media (max-width: 770px) {
    font-size: 8vw;
    transform: translate(-6vw, 0);
  }

  @media (max-width: 479px) {
    margin-left: 0;
    position: static;
    -webkit-text-stroke-width: 1px;

    font-size: ${props => (props.eventCategorySize ? '25vw' : '20vw')};
    transform: ${props =>
      props.eventCategorySize
        ? 'translate(-7vw,16vw)'
        : 'translate(-17vw,15vw)'};
    line-height: 15vw;
  }
`;

function TitleName({
  heading1,
  heading2,
  eventCategory1,
  eventCategory2,
  eventCatSize,
}) {
  if (screenWidth >= 479) {
    return (
      <Titleholder>
        <EventType>
          {heading1}
          <br />
          {heading2}
          <EventCategory>
            {eventCategory1}
            <br />
            {eventCategory2}
          </EventCategory>
        </EventType>
      </Titleholder>
    );
  }

  return (
    <Titleholder>
      <EventCategory eventCategorySize={eventCatSize}>
        {eventCategory1}
        <br />
        {eventCategory2}
      </EventCategory>
      <EventType>
        {heading1}
        <br />
        {heading2}
      </EventType>
    </Titleholder>
  );
}

export default TitleName;
