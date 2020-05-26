import React from 'react';
import EventText from '../event_text/EventText';
import './DesktopEvents.scss';

export default props => {
  const { config } = props;

  return (
    <div className='events'>
      <EventText
        title='DANCE'
        line1='NATYANJALIDANCINGDUOSIZZLEFOOTLOOSENATYANJALI'
        line2='FOOTLOOSENATYANJALIDANCINGDUONARANJALISIZZLE'
        left={config[0]}
      />

      <EventText
        title='MUSIC'
        line1='SOLONOTESILENCEOFTHEAMPSRAPSODYSEAROCK'
        line2='RAPSODYSEAROCKJUKEBOXSOLONOTERAPSODYJUKEBOX'
        left={config[1]}
      />

      <EventText
        title='DRAMA'
        line1='RANGMANCHNUKKADNATAKRANGMANCHNUKKADNATAK'
        line2='NUKKADNATAKRANGMANCHNUKKADNATAKRANGMANCH'
        left={config[2]}
      />

      <EventText
        title='FASHION'
        line1='FASHIONFASHIONFASHIONFASHIONFASHIONFASHION'
        line2='FASHIONFASHIONFASHIONFASHIONFASHIONFASHION'
        left={config[3]}
      />

      <EventText
        title='FINE ARTS'
        line1='ARTATHONBLINDARTJUSTFOLDITARTATHONJUSTFOLDIT'
        line2='BLINDARTJUSTFOLDITARTATHONJUSTFOLDITBLINDART'
        left={config[4]}
      />

      <EventText
        title='CARPEDICTUM'
        line1='INVERSECULTURALGAUNTLETMELASMELASWORDGAMES'
        line2='WORDGAMESINVERSECULTURALGAUNTLETMELASNVERSECULTURAL'
        left={config[5]}
      />

      <EventText
        title='DESIGN'
        line1=" LETS'NOTGETWASTEDmoTEEFKICKSTARTmoTEEFAVANT&#8208;GARDE"
        line2="AVANT&#8208;GARDEDESIGNLET'USNOTGETWASTEDmoTEEF"
        left={config[6]}
      />

      <EventText
        title='QUIZ'
        line1='WAVESOPENTHEVICESQUIZVOYAGEWAVEOPENHETRAVELANDLIVING'
        line2='THETRAVELANDLIVINGQUIZTHEVICESQUIZVOYAGEWAVESOPEN'
        left={config[7]}
      />

      <EventText
        title='PHOTOGRAPHY'
        line1='SHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
        line2='OHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAPSHO(R)TOHSNAP'
        left={config[8]}
      />

      <EventText
        title='SPECIALS'
        line1='STRANGELYFAMILIARSHOWMETHEFUNNYCONTENTIONSTRANGELYFAMILIAR'
        line2='CONTENTIONNEWSANCEMR.ANDMRS.WAVESSTRANGELYFAMILIAR'
        left={config[9]}
      />
    </div>
  );
};
