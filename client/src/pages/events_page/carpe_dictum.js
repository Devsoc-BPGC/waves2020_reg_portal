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

var cdTitle1,cdTitle2;
if(window.screen.width < 479){
  cdTitle1 = "CONTESTS";
  cdTitle2 = "";
}
else if(window.screen.width >= 479){
  cdTitle1 = "CON";
  cdTitle2 = "TESTS";
};



const pinkTextContent = [

        " national poetry slam",
        " skills of the English language",
        " mastery of the written word!"
];

const content = [
    
        "The"
       
    ,

        " for Waves ‘19 is your ticket into the world of the spoken word. Time to break out the old meter, dust off that rhythm and put those poetic devices to work to deliver a performance of a lifetime. If spoken word poetry is your passion, this is the place to be. Fabulous prizes await!"
    
    ,

        "The cultural gauntlet is the perfect place to put your"
        
    ,

        " to the test. Whether it is maintaining grammatical accuracy in Just-a-Minute, going head to head for a lifejacket to escape a hypothetical sinking ship in ShipWreck or switching views on the fly in Block and Tackle. The Cultural Gauntlet has got all your bases covered!"

    ,

    
        "“Everything irrelevant to life”"
    ,

        "The ultimate test of your"
        
    ,

        " Whether you’re a practiced word wizard or just looking to kill some time with a refreshing detox, our carefully curated collection is right up to the task. Tackle a fun miscellanea of crafty puzzles - puns, palindromes, cryptic crosswords and so much more - as you valiantly vie to be the victorious virtuoso. Let the (word) games begin!"  
];

const HeaderText1 = "INVERSECULTURALGAUNTLETMELASINVERSEWORDGAMESMELASINVERSEMELASWORDGAMES";
const HeaderText2 = "WORDGAMESINVERSEMELASWORDGAMESCULTURALGAUNTLETINVERSEWORDGAMESMELASINVERSE";

function Carpe() {
  return (      
    <Page>
        <style>{'body{background-color:#2F0B4B}'}</style> 
        <EventHeader text1 = {HeaderText1} text2 = {HeaderText2} />     
        <EventTitle heading1 = {cdTitle1} heading2 = {cdTitle2} eventCategory1 = "CARPE" eventCategory2 = "DICTUM" eventCatSizeDesk = 'cd' eventCatSizeMob = 'cd' />  
        <EventDesc eventName = "INVERSE" eventDesc1 = {content[0]} pinkEventText1 = {pinkTextContent[0]} eventDesc2 = {content[1]}></EventDesc> 
        <EventDesc eventName = "CULTURAL GAUNTLET" eventDesc1 = {content[2]} pinkEventText1 = {pinkTextContent[1]} eventDesc2 = {content[3]}></EventDesc>
        <EventDesc eventName = "MELAS" eventDesc1 = {content[4]}></EventDesc>
        <EventDesc eventName = "WORD GAMES" eventDesc1 = {content[5]} pinkEventText1 = {pinkTextContent[2]} eventDesc2 = {content[6]}></EventDesc>
        <RegisterButton />             
    </Page>
  );    
}

export default Carpe;