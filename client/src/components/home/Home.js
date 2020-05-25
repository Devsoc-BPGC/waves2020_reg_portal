import React from 'react';
import './Home.scss';
import DesktopEvents from './desktop_events/DesktopEvents';
// import '../../fonts/Font.scss';

//  DEFINING PROP ARRAY FOR DESKTOP
const config1 = [
  ['0.75%', '60%'],
  ['20.8%', '50%'],
  ['40.8%', '60%'],
  ['61.8%', '50%'],
  ['82%', '40%'],
  ['102.5%', '35%'],
  ['123.5%', '50%'],
  ['143.5%', '45%'],
  ['164%', '33%'],
  ['184%', '15%'],
];

const config2 = [
  ['0.75%', '40%'],
  ['15%', '30%'],
  ['28.8%', '40%'],
  ['43.2%', '30%'],
  ['57.5%', '20%'],
  ['71.5%', '15%'],
  ['86%', '30%'],
  ['100%', '25%'],
  ['114.5%', '13%'],
  ['128.5%', '15%'],
];

export default () => {
  return (
    <div className='home'>
      <div className='desktop'>
        <div className='text'>
          Waves is BITS Goa’s annual cultural fest, a melting pot of art,
          talent, skill, creativity, and intellectual prowess in their purest
          forms that attracts students from across the nation. During Waves,
          students can witness all sorts of amazing competitions, including
          breath-taking dance-offs, eclectic musical performances, heated
          debates, intense poetry slams, and a wide variety of other interesting
          events. And that’s just during the days- the nights of Waves have seen
          artists such as Vishal-Shekhar, Amit Trivedi, Farhan Akhtar,
          Salim-Sulieman, Nucleya, The Local Train, and other amazing musical
          acts setting the stage on fire. For everything that BITS Goa is and
          represents, Waves is the fest you just can’t miss.
        </div>
        <div className='config1'>
          <DesktopEvents config={config1} />
        </div>
        <div className='config2'>
          <DesktopEvents config={config2} />
        </div>
      </div>
    </div>
  );
};
