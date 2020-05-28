import React from 'react';
import styled from 'styled-components';
import './events_content.scss';

const SingleEvent = styled.div`
  position: relative;
  margin-left: 60%;
  margin-top: 13%;
  margin-right: 32px;

  @media (max-width: 991px) {
    transform: translate(-10px, -50px);
  }

  @media (max-width: 770px) {
    transform: translate(-10px, 5vh);
  }

  @media (max-width: 479px) {
    transform: translate(-50%, 2vh);
    margin-right: -15%;
  }
`;

const EventSubTitle = styled.div`
  width: max-content;
`;

const EventSubTitleName = styled.div`
  color: #ebebfc;
  margin-top: -15px;
  transform: translate(-20px, 0);
  font-family: 'Circular Italic';
  font-weight: bold;
  width: max-content;
`;

const EventSubTitleBackColor = styled.div`
  background-color: #ff6df0;
  height: 20px;
`;

const EventDescription = styled.div`
  color: #ebebfc;
  margin-top: 5px;
  font-family: 'GT America Regular';
  font-style: normal;
  font-weight: normal;
`;

const PinkTextDesc = styled.span`
  color: #ff6df0;
`;

function EventPortion({
  eventName,
  eventDesc1,
  pinkEventText1,
  eventDesc2,
  pinkEventText2,
  eventDesc3,
}) {
  return (
    <SingleEvent>
      <EventSubTitle>
        <EventSubTitleBackColor />
        <EventSubTitleName>{eventName}</EventSubTitleName>
      </EventSubTitle>
      <EventDescription>
        {eventDesc1}
        <PinkTextDesc>{pinkEventText1}</PinkTextDesc>
        {eventDesc2}
        <PinkTextDesc>{pinkEventText2}</PinkTextDesc>
        {eventDesc3}
      </EventDescription>
    </SingleEvent>
  );
}

export default EventPortion;
