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

var musicTitle1,musicTitle2;
if(window.screen.width < 479){
  musicTitle1 = "TEAM & SOLO";
  musicTitle2 = "";
}
else if(window.screen.width >= 479){
  musicTitle1 = "TEAM &";
  musicTitle2 = "INDIVIDUAL"
};



const pinkTextContent = [

        " rock enthusiasts",
        " solo event",
        " Indian or Western",
        " local Hip-Hop culture",
        " semi-pro rock band competitions",
        " pure music",
        " Acoustic Covers"
];

const content = [
    
        "One of the most anticipated events in WAVES, this is the grand stage for all"
    
    ,

        " and budding artists of the country. With all the amazing music and the Led Zeppelin vibe the participants truly bring out the amazing flare of all the greats."

    ,

    
        "This is a"
    ,

        " under Music category in which participants use their vocal abilities to compete. The song can be  "
    
    ,

        "All of us have heard the songs of Panjabi, Divine, Raftaar. Well get ready to experience the"
    ,
        
        ", this Waves. For the first time ever, we present to you the Rapsody, a showdown for all rap enthusiasts."

    ,

        "One of the most grandiose"
        
    ,
    
        " in the country. Alumni of the likes of Zygnema, The Family Cheese, Knight Shades, and Inner Sanctum. Bringing you enticing opportunities to showcase your talents, Searock is back with its 15th iteration this fall. Register here."
    
    ,

        "If you wanna listen to"

    ,

        " or for a delightful experience of musicians, join us in Silence Of The Amps, where you can listen to the"
    ,

        "of your favorite artists.\"Music that is acoustic, unwired, unplugged is it\'s most purest form\"-Craig Conley"  
];

const HeaderText1 = "INDIANROCKJUKEBOXSILENCEOFTHEAMPSINDIANROCKSEAROCKRAPSODY";
const HeaderText2 = "RAPSODYSILENCEOFTHEAMPSINDIANROCKJUKEBOXINDIANBOXSEAROCK";

function Music() {
  return (      
    <Page>
        <style>{'body{background-color:#2F0B4B}'}</style>
        <EventHeader text1 = {HeaderText1} text2 = {HeaderText2} />      
        <EventTitle heading1 = {musicTitle1} heading2 = {musicTitle2} eventCategory1 = "MUSIC" eventCategory2 = "" eventCatSizeDesc = 'other' eventCatSizeDesk = 'other' eventCatSizeMob = 'other' />  
        <EventDesc eventName = "INDIAN ROCK" eventDesc1 = {content[0]} pinkEventText1 = {pinkTextContent[0]} eventDesc2 = {content[1]}></EventDesc> 
        <EventDesc eventName = "JUKEBOX" eventDesc1 = {content[2]} pinkEventText1 = {pinkTextContent[1]} eventDesc2 = {content[3]} pinkEventText2 = {pinkTextContent[2]}></EventDesc>
        <EventDesc eventName = "RAPSODY" eventDesc1 = {content[4]} pinkEventText1 = {pinkTextContent[3]} eventDesc2 = {content[5]}></EventDesc>
        <EventDesc eventName = "SEAROCK" eventDesc1 = {content[6]} pinkEventText1 = {pinkTextContent[4]} eventDesc2 = {content[7]}></EventDesc>
        <EventDesc eventName = "SILENCE OF THE AMPS" eventDesc1 = {content[8]} pinkEventText1 = {pinkTextContent[5]} eventDesc2 = {content[9]} pinkEventText2 = {pinkTextContent[6]} eventDesc3 = {content[10]}></EventDesc>
        <RegisterButton />             
    </Page>
  );    
}

export default Music;