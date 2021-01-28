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

var fpTitle1,fpTitle2;
if(window.screen.width < 479){
  fpTitle1 = "COMPETITIONS";
  fpTitle2 = "";
}
else if(window.screen.width >= 479){
  fpTitle1 = "COMP";
  fpTitle2 = "ETITIONS";
};



const pinkTextContent = [

        " team short film competition",
        " team photography competition"
];

const content = [
    
        "Short is a themed" 
        
    ,

        ".This competition takes place online, and is a great platform for budding filmmakers and film enthusiasts to hone their skills and show off their work. The winning film has the amazing opportunity to get published online."
    
    ,

        "Oh Snap is a"
        
    ,

        ". This competition takes place online and all the submissions follow a certain theme. Oh Snap is a great opportunity for a photographer to show off what the world looks like through their eyes and what an idea means to them."  
];

const HeaderText1 = "SHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSORTOHSNAP";
const HeaderText2 = "OHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORTOHSNAPSHORT";

function Film() {
  return (      
    <Page>
        <style>{'body{background-color:#2F0B4B}'}</style> 
        <EventHeader text1 = {HeaderText1} text2 = {HeaderText2} />     
        <EventTitle heading1 = {fpTitle1} heading2 = {fpTitle2} eventCategory1 = "FILM &" eventCategory2 = "PHOTOGRAPHY" eventCatSizeDesk = 'fp' eventCatSizeMob = 'fp' />  
        <EventDesc eventName = "SHORT" eventDesc1 = {content[0]} pinkEventText1 = {pinkTextContent[0]} eventDesc2 = {content[1]}></EventDesc> 
        <EventDesc eventName = "OH  SNAP!" eventDesc1 = {content[2]} pinkEventText1 = {pinkTextContent[1]} eventDesc2 = {content[3]} pinkEventText2 = {pinkTextContent[2]}></EventDesc>
        <RegisterButton />             
    </Page>
  );    
}

export default Film;