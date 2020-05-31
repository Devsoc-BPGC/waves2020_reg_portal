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

var quizTitle1,quizTitle2;
if(window.screen.width < 479){
  quizTitle1 = "CONTESTS";
  quizTitle2 = "";
}
else if(window.screen.width >= 479){
  quizTitle1 = "CON";
  quizTitle2 = "TESTS"
};



const pinkTextContent = [

        // " rock enthusiasts",
        // " solo event",
        // " Indian or Western",
        // " local Hip-Hop culture",
        // " semi-pro rock band competitions",
        // " pure music",
        // " Acoustic Covers"
];

const content = [
    
        "“The fifth Grand Slam of the year.”"
    
    ,

        "“There is no God here.”"

    ,

    
        "The Travel and Living Quiz - “How far do you think you can go?”"    
];

const HeaderText1 = "WAVESOPENTHEVICESQUIZTHEVOYAGEQUIZTHEVICESQUIZWAVESOPENTHEVOYAGEQUIZ";
const HeaderText2 = "THEVOYAGEQUIZWAVESOPENTHEVOYAGEQUIZTHEVICESQUIZWAVESOPENTHEVICESQUIZ";


function Quiz() {
  return (      
    <Page>
        <style>{'body{background-color:#2F0B4B}'}</style> 
        <EventHeader text1 = {HeaderText1} text2 = {HeaderText2} />      
        <EventTitle heading1 = {quizTitle1} heading2 = {quizTitle2} eventCategory1 = "QUIZ" eventCategory2 = "" eventCatSizeDesk = 'other' eventCatSizeMob = 'quiz' />  
        <EventDesc eventName = "WAVES OPEN" eventDesc1 = {content[0]} ></EventDesc> 
        <EventDesc eventName = "THE VICES QUIZ" eventDesc1 = {content[1]}></EventDesc>
        <EventDesc eventName = "THE VOYAGE QUIZ" eventDesc1 = {content[2]}></EventDesc>
        <RegisterButton />             
    </Page>
  );    
}

export default Quiz;