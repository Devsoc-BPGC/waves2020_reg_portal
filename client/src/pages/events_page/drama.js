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

var dramaTitle1,dramaTitle2;
if(window.screen.width < 479){
  dramaTitle1 = "STREET &";
  dramaTitle2 = "STAGE";
}
else if(window.screen.width >= 479){
  dramaTitle1 = "STREET";
  dramaTitle2 = "& STAGE";
};



const pinkTextContent = [

        " street play",
        " bring the stage to life"        
];

const content = [
    
        "A"
    ,    
        " addresses a public issue and engages the public through its intensity and vivid scenes. Gather your crew, build up your scenes, compose your jingles, and join us in Nukkad Natak, the street play event, to put up a captivating production to impress the masses."
    
    ,

        "All the world’s a stage, so round up your cast and"
      
    ,

        ", in Rangmanch, the stage play event. Participants get the opportunity to perform a play of their choice and display their acting skills, engaging the audience with their words, music and theatrics."
  
];

const HeaderText1 = "NUKKADNATAKRANGMANCHNIKKADNATAKRANGMANCHNUKKADNATAKRANGMANCHNUKKADNATAKRANGMANCH";
const HeaderText2 = "RANGMANCHNUKKADNATAKRANGMANCHNUKKADNATAKRANGMANCHNUKKADNATAKRANGMANCH";

function Drama() {
  return (      
    <Page>
        <style>{'body{background-color:#2F0B4B}'}</style>
        <EventHeader text1 = {HeaderText1} text2 = {HeaderText2} />        
        <EventTitle heading1 = {dramaTitle1} heading2 = {dramaTitle2} eventCategory1 = "DRAMA" eventCategory2 = "" eventCatSizeDesk = 'other'  eventCatSizeMob = 'drama' />  
        <EventDesc eventName = "NUKKAD NATAK" eventDesc1 = {content[0]} pinkEventText1 = {pinkTextContent[0]} eventDesc2 = {content[1]}></EventDesc> 
        <EventDesc eventName = "RANGMANCH" eventDesc1 = {content[2]} pinkEventText1 = {pinkTextContent[1]} eventDesc2 = {content[3]} pinkEventText2 = {pinkTextContent[2]}></EventDesc>
        <RegisterButton />             
    </Page>
  );    
}

export default Drama;