import React from 'react';
import EventText from '../event_text/EventText';
import './DesktopEvents.scss';

export default props => {
  const { config } = props;

  return (
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
        top={config[1][0]}
        left={config[1][1]}
      />

      <EventText
        title='DRAMA'
        line1='RANGMANCHNUKKADNATAKRANGMANCH'
        line2='NUKKADNATAKRANGMANCHNUKKADNATAK'
        top={config[2][0]}
        left={config[2][1]}
      />

      <EventText
        title='FASHION'
        line1='FASHIONFASHIONFASHIONFASHIONFASHION'
        line2='FASHIONFASHIONFASHIONFASHIONFASHION'
        top={config[3][0]}
        left={config[3][1]}
      />

      <EventText
        title='FINE ARTS'
        line1='ARTATHONBLINDARTJUSTFOLDITARTATHON'
        line2='BLINDARTJUSTFOLDITARTATHONJUSTFOLDIT'
        top={config[4][0]}
        left={config[4][1]}
      />

      <EventText
        title='CARPEDICTUM'
        line1='INVERSECULTURALGAUNTLETMELASMELAS'
        line2='WORGAMESINVERSECULTURALGAUNTLETMELAS'
        top={config[5][0]}
        left={config[5][1]}
      />

      <EventText
        title='DESIGN'
        line1=" LETS'NOTGETWASTEDmoTEEFKICKSTARTmoTEEF"
        line2="AVANT&#8208;GARDEDESIGNLET'USNOTGETWASTED"
        top={config[6][0]}
        left={config[6][1]}
      />

      <EventText
        title='QUIZ'
        line1='WAVESOPENTHEVICESQUIZVOYAGEWAVEOPEN'
        line2='THETRAVELANDLIVINGQUIZTHEVICESQUIZVOYAGE'
        top={config[7][0]}
        left={config[7][1]}
      />

      <EventText
        title='PHOTOGRAPHY'
        line1='SHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
        line2='OHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
        top={config[8][0]}
        left={config[8][1]}
      />

      <EventText
        title='SPECIALS'
        line1='STRANGELYFAMILIARSHOWMETHEFUNNYCONTENTION'
        line2='CONTENTIONNEWSANCEMR.ANDMRS.WAVESSTRANGELY'
        top={config[9][0]}
        left={config[9][1]}
      />
    </div>
  );
};
