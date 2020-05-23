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
      <div className='events'>
        <EventText
          title='DANCE'
          line1='NATYANJALIDANCINGDUOSIZZLEFOOTLOOSE'
          line2='FOOTLOOSENATYANJALIDANCINGDUONARANJALI'
        />

        <EventText
          title='MUSIC'
          line1='SOLONOTESILENCEOFTHEAMPSRAPSODY'
          line2='RAPSODYSEAROCKJUKEBOXSOLONOTERAPSODY'
        />

        <EventText
          title='DRAMA'
          line1='RANGMANCHNUKKADNATAKRANGMANCH'
          line2='NUKKADNATAKRANGMANCHNUKKADNATAK'
        />

        <EventText
          title='FASHION'
          line1='FASHIONFASHIONFASHIONFASHIONFASHION'
          line2='FASHIONFASHIONFASHIONFASHIONFASHION'
        />

        <EventText
          title='FINE ARTS'
          line1='ARTATHONBLINDARTJUSTFOLDITARTATHON'
          line2='BLINDARTJUSTFOLDITARTATHONJUSTFOLDIT'
        />

        <EventText
          title='CARPEDICTUM'
          line1='INVERSECULTURALGAUNTLETMELASMELAS'
          line2='WORGAMESINVERSECULTURALGAUNTLETMELAS'
        />

        <EventText
          title='DESIGN'
          line1=" LETS'NOTGETWASTEDmoTEEFKICKSTARTmoTEEF"
          line2="AVANT&#8208;GARDEDESIGNLET'USNOTGETWASTED"
        />

        <EventText
          title='QUIZ'
          line1='WAVESOPENTHEVICESQUIZVOYAGEWAVEOPEN'
          line2='THETRAVELANDLIVINGQUIZTHEVICESQUIZVOYAGE'
        />

        <EventText
          title='PHOTGGRAPHY'
          line1='SHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
          line2='OHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
        />

        <EventText
          title='SPECIALS'
          line1='STRANGELYFAMILIARSHOWMETHEFUNNYCONTENTION'
          line2='CONTENTIONNEWSANCEMR.ANDMRS.WAVESSTRANGELY'
        />
      </div>
    </div>
  );
};
