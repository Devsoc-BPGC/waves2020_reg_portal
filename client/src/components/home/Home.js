// ==========================================================
//  IMPORTING LIBRARIES
// ==========================================================

import React from 'react';
import './Home.scss';
import EventText from './event_text/EventText';
// import '../../fonts/Font.scss';

// ==========================================================
//  EXPORTING APP
// ==========================================================

export default () => {
  return (
    <div className='home'>
      <div className='text'>
        Waves is BITS Goa’s annual cultural fest, a melting pot of art, talent,
        skill, creativity, and intellectual prowess in their purest forms that
        attracts students from across the nation. During Waves, students can
        witness all sorts of amazing competitions, including breath-taking
        dance-offs, eclectic musical performances, heated debates, intense
        poetry slams, and a wide variety of other interesting events. And that’s
        just during the days- the nights of Waves have seen artists such as
        Vishal-Shekhar, Amit Trivedi, Farhan Akhtar, Salim-Sulieman, Nucleya,
        The Local Train, and other amazing musical acts setting the stage on
        fire. For everything that BITS Goa is and represents, Waves is the fest
        you just can’t miss.
      </div>
      <div className='events'>
        <EventText
          title='DANCE'
          line1='NATYANJALIDANCINGDUOSIZZLEFOOTLOOSE'
          line2='FOOTLOOSENATYANJALIDANCINGDUONARANJALI'
          top='0.75%'
          left='60%'
        />

        <EventText
          title='MUSIC'
          line1='SOLONOTESILENCEOFTHEAMPSRAPSODY'
          line2='RAPSODYSEAROCKJUKEBOXSOLONOTERAPSODY'
          top='20.8%'
          left='50%'
        />

        <EventText
          title='DRAMA'
          line1='RANGMANCHNUKKADNATAKRANGMANCH'
          line2='NUKKADNATAKRANGMANCHNUKKADNATAK'
          top='40.8%'
          left='60%'
        />

        <EventText
          title='FASHION'
          line1='FASHIONFASHIONFASHIONFASHIONFASHION'
          line2='FASHIONFASHIONFASHIONFASHIONFASHION'
          top='61.8%'
          left='50%'
        />

        <EventText
          title='FINE ARTS'
          line1='ARTATHONBLINDARTJUSTFOLDITARTATHON'
          line2='BLINDARTJUSTFOLDITARTATHONJUSTFOLDIT'
          top='82%'
          left='40%'
        />

        <EventText
          title='CARPEDICTUM'
          line1='INVERSECULTURALGAUNTLETMELASMELAS'
          line2='WORGAMESINVERSECULTURALGAUNTLETMELAS'
          top='102.5%'
          left='35%'
        />

        <EventText
          title='DESIGN'
          line1=" LETS'NOTGETWASTEDmoTEEFKICKSTARTmoTEEF"
          line2="AVANT&#8208;GARDEDESIGNLET'USNOTGETWASTED"
          top='123.5%'
          left='50%'
        />

        <EventText
          title='QUIZ'
          line1='WAVESOPENTHEVICESQUIZVOYAGEWAVEOPEN'
          line2='THETRAVELANDLIVINGQUIZTHEVICESQUIZVOYAGE'
          top='143.5%'
          left='45%'
        />

        <EventText
          title='PHOTGGRAPHY'
          line1='SHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
          line2='OHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
          top='164%'
          left='35%'
        />

        <EventText
          title='SPECIALS'
          line1='STRANGELYFAMILIARSHOWMETHEFUNNYCONTENTION'
          line2='CONTENTIONNEWSANCEMR.ANDMRS.WAVESSTRANGELY'
          top='184%'
          left='15%'
        />
      </div>
    </div>
  );
};
