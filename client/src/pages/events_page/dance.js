import React from 'react';
import styled from 'styled-components';

import EventHeader from "./../components/event_header/event_header";
import EventTitle from "./../components/events_title/event_title";
import EventDesc from "./../components/events_content/events_content";
import RegisterButton from "./../components/register_button/register_button";

const Page = styled.div` 
  display : flex;
  flex-direction : column;  
`;

var danceTitle1,danceTitle2;
if(window.screen.width < 479){
  danceTitle1 = "TEAM & SOLO";
  danceTitle2 = "";
}
else if(window.screen.width >= 479){
  danceTitle1 = "TEAM &";
  danceTitle2 = "INDIVIDUAL"
};



const pinkTextContent = [

        " stage team dance",
        " solo street dance battle",
        " duet dancing",
        " team street dance"
];

const content = [
    
      "Natyanjali is one of the Big Four events of Waves. Natyanjali is a" 
    
    ,

      " competition that has colleges from all across the country bringing their best. There are two categories in this event: Thematic where teams convey a message through their dance and Non-thematic where the teams perform anything they wish. Teams will be performing their own prepared dance sequences on a stage, in front of a judging panel. Each team will be judged against the other teams performing under the same category, i.e. thematic or non-thematic."
    
    ,

      "Sizzle is a"
      
    ,

      " event. The dancers bring their own flare, making the one-on-one battles intense! Being one of the most anticipated events of Waves, Sizzle proves to get bigger and better with each edition. The highlight of this event is the Final face-offs that take place out on the streets, amidst energetic, cheering crowds."
    
    ,

      "Dancing Duo is a"
     
    ,

      " competition. Contestants come in pairs and dance their way through multiple engaging rounds while showcasing their dancing skills and chemistry. This event attracts dancers from various styles and makes for a great crowd-pleaser and is definitely a must-watch!"

    ,

      "Footloose is the newest addition to the Dance Events of Waves, with its third edition taking place this Waves. This is a"
    
    ,    
      " team street dance battle where teams from all over the country take it to the streets and face off to see who’s really the best. Footloose is already a crowd favourite, and the competition just gets bigger and better."
        
];

const HeaderText1 = "NATYANJALIDANCINGDUOSIZZLEFOOTLOOSEDANCINGDUOSIZZLEFOOTLOOSE";
const HeaderText2 = "FOOTLOOSENATYANJALIDANCINGDUOFOOTLOOSENATYANJALIDANCINGDUO";


function App() {
  return (
    <Page> 
      <style>{'body{background-color:#2F0B4B}'}</style>
      <EventHeader text1 = {HeaderText1} text2 = {HeaderText2} />
      <EventTitle heading1 = {danceTitle1} heading2 = {danceTitle2} eventCategory1 = "DANCE" eventCategory2 = ""  eventCatSizeDesk = 'other' eventCatSizeMob = 'other' />  
      <EventDesc eventName = "NATYANJALI" eventDesc1 = {content[0]} pinkEventText1 = {pinkTextContent[0]} eventDesc2 = {content[1]}></EventDesc> 
      <EventDesc eventName = "SIZZLE" eventDesc1 = {content[2]} pinkEventText1 = {pinkTextContent[1]} eventDesc2 = {content[3]}></EventDesc>
      <EventDesc eventName = "DANCING DUO" eventDesc1 = {content[4]} pinkEventText1 = {pinkTextContent[2]} eventDesc2 = {content[5]}></EventDesc>
      <EventDesc eventName = "FOOTLOOSE" eventDesc1 = {content[6]} pinkEventText1 = {pinkTextContent[3]} eventDesc2 = {content[7]}></EventDesc>
      <RegisterButton />         
    </Page>
  );    
}

export default App;