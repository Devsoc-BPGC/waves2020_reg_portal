import React from 'react';
import styled,{keyframes} from 'styled-components';

const screenWidth = window.screen.width;

const animate = keyframes`
    0% {
        transform : translateY(110%);
        opacity : 0;
    }

    50% 100%{
        transform : translateY(100%);
        opacity : 1;
    }
`;

const Titleholder = styled.div`
    display : flex;
    flex-direction : column;
    width : 50vw;
    height : 15vw;            
    align-self : flex-end;
    margin-top : -3vw; 
    overflow-y: hidden;
    overflow-x : visible;    

    @media (max-width:991px){
        width : 750px;
    } 

    @media (max-width:770px){  
        width : 575px;
    } 

    @media (max-width:479px){
        width : 100%;
        height : 150px;
        margin : 0px; 
        position : relative;
    }   

`;

const EventType =styled.div`   
    position : absolute;
    color : #EBEBFC;    
    line-height:77%; 
    text-align : right;   
    font-size : 7vw;
    margin-top : 0px;
    font-family: 'GT-America-Extended-Bold'; 
    margin-left : auto;  
    align-self : flex-end;
    margin-right:32px; 
    overflow : hidden;
    padding-bottom : 10px; 

    div{
        animation : ${animate} 0.5s linear;
        animation-iteration : 1;
    }   
    
    @media (max-width:991px){
        font-size : 7.2vw;
    } 

    @media (max-width:770px){
        font-size : 8vw;
        transform : translate(-6vw,0);
    } 

    @media (max-width:479px){        
        font-size:9vw;
        transform : translate(0,14vw);           
    }

`;

const EventCategory = styled.div`   
    position : absolute;
    color : #FF6DF0;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 3px;
    font-size : 7vw;    
    font-family : "Circular-Std-Regular";
    font-style : italic;
    font_weight : bold;
    line-height:5.5vw;
    align-self : flex-end;
    text-align : left;   
    overflow : hidden;
    padding-right : 15px;
    padding-top : 5px;

    transform : ${props => {
        const trans = props.eventCategorySizeDesk;

        if(trans === 'fp'){
            return 'translate(-10%,50%)';
        }
        else if(trans === 'cd'){
            return 'translate(-60%,70%)';
        }
        else if(trans === 'other'){
            return 'translate(-122%,150%)';
        }
    }};

    div{        
        animation : ${animate} 0.5s linear;
        animation-iteration : 1;
        animation-delay : 0.5s;
        animation-fill-mode: both;
    }


    @media (max-width:991px){
        font-size : 7.2vw;
    } 

    @media (max-width:770px){        
        font-size : 8vw;
        line-height : 7vw;
        transform : ${props => {
            const trans = props.eventCategorySizeDesk;

            if(trans === 'fp'){
                return 'translate(-20%,55%)';
            }
            else if(trans === 'cd'){
                return 'translate(-80%,50%)';
            }
            else if(trans === 'other'){
                return 'translate(-140%,130%)';
            }
        }};
    }

    @media (max-width:479px){
        margin-left : 0;        
        position : static;
        -webkit-text-stroke-width: 1px;
       
        transform : ${props => {
            const trans = props.eventCategorySizeMob;

            if(trans === 'fp'){
                return 'translate(-10%,45%)';
            }
            else if(trans === 'cd'){
                return 'translate(-50%,35%)';
            }
            else if(trans === 'other'){
                return 'translate(-20%,20%)';
            }
            else if(trans === 'quiz'){
                return 'translate(-70%,20%)';
            }
            else if(trans === 'drama'){
                return 'translate(-14%,17%)';
            }
        }};

        font-size : ${props => {
            const trans = props.eventCategorySizeMob;

            if(trans === 'fp'){
                return '11vw';
            }
            else if(trans === 'cd'){
                return '15vw';
            }
            else if(trans === 'other'){
                return '22vw';
            }
            else if(trans === 'quiz'){
                return '22vw';
            }
            else if(trans === 'drama'){
                return '22vw';
            }
        }};

        line-height : ${props => {
            const trans = props.eventCategorySizeMob;

            if(trans === 'fp'){
                return '9vw';
            }
            else if(trans === 'cd'){
                return '12vw';
            }
            else if(trans === 'other'){
                return '25vw';
            }
            else if(trans === 'quiz'){
                return '25vw';
            }
            else if(trans === 'drama'){
                return '25vw';
            }
        }};
    }  
`;


function TitleName (heading1,heading2,eventCatSizeDesk,eventCategory1,eventCategory2,eventCatSizeMob){

    if(screenWidth >= 479){
        return(
            <Titleholder>
                <EventType>
                    <div>{heading1}<br />{heading2}</div>                    
                </EventType>
                <EventCategory eventCategorySizeDesk = {eventCatSizeDesk}><div>{eventCategory1}<br />{eventCategory2}</div></EventCategory>
            </Titleholder>  
        ); 
    }

    else{
        return(
            <Titleholder>                
                <EventCategory eventCategorySizeMob = {eventCatSizeMob}>{eventCategory1}<br/>{eventCategory2}</EventCategory>
                <EventType>{heading1}<br />{heading2}</EventType>
            </Titleholder>  
        );
    }    
};

export default TitleName;