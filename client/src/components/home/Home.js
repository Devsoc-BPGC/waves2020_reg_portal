import React from 'react';
import './Home.scss';
import OutlineText from '../microcomponents/OutlineText';
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
      <div className='mobile'>
        <div className='main'>
          <div className='about'>
            <span className='ab'>ab</span>
            <br />
            out
          </div>
          <div className='text'>
            Waves is <span className='pink'>BITS Goa’s</span> annual{' '}
            <span className='pink'>cultural fest</span>, a melting pot of art,
            talent, skill, creativity, and intellectual prowess in their purest
            forms that attracts <span className='pink'>students</span> from
            across the nation. During Waves, students can witness all sorts of
            amazing competitions, including breath-taking dance-offs, eclectic
            musical performances, heated debates, intense poetry slams, and a
            wide variety of other interesting events. And that’s just during the
            days- the nights of Waves have seen artists such as Vishal-Shekhar,
            Amit Trivedi, Farhan Akhtar, Salim-Sulieman, Nucleya, The Local
            Train, and other amazing musical acts setting the stage on fire. For
            everything that BITS Goa is and represents, Waves is the fest you
            just can’t miss.
            <div className='line' />
          </div>
          <div className='events_big'>
            <div className='event'>
              <OutlineText text='DANCE' size='650%' color='white' />
            </div>

            <div className='event'>
              <OutlineText text='MUSIC' size='700%' color='#FF6DF0' />
            </div>

            <div className='event'>
              <OutlineText text='FASHION' size='500%' color='white' />
            </div>

            <div className='event'>
              <OutlineText text='DRAMA' size='600%' color='#FF6DF0' />
            </div>

            <div className='event'>
              <OutlineText text='FINE ARTS' size='450%' color='white' />
            </div>

            <div className='event'>
              <OutlineText text='DESIGN' size='600%' color='#FF6DF0' />
            </div>

            <div className='event'>
              <OutlineText text='CARPEDICTUM' size='300%' color='white' />
            </div>

            <div className='event'>
              <OutlineText text='QUIZ' size='900%' color='#FF6DF0' />
            </div>

            <div className='event'>
              <OutlineText text='PHOTOGRAPHY' size='300%' color='white' />
            </div>

            <div className='event'>
              <OutlineText text='SPECIALS' size='500%' color='#FF6DF0' />
            </div>
          </div>

          {/* For screen size less than 400px */}
          <div className='events_small'>
            <div className='event'>
              <OutlineText text='DANCE' size='600%' color='white' />
            </div>
            <div className='event'>
              <OutlineText text='MUSIC' size='650%' color='#FF6DF0' />
            </div>
            <div className='event'>
              <OutlineText text='FASHION' size='450%' color='white' />
            </div>
            <div className='event'>
              <OutlineText text='DRAMA' size='550%' color='#FF6DF0' />
            </div>
            <div className='event'>
              <OutlineText text='FINE ARTS' size='400%' color='white' />
            </div>
            <div className='event'>
              <OutlineText text='DESIGN' size='550%' color='#FF6DF0' />
            </div>
            <div className='event'>
              <OutlineText text='CARPEDICTUM' size='250%' color='white' />
            </div>
            <div className='event'>
              <OutlineText text='QUIZ' size='850%' color='#FF6DF0' />
            </div>
            <div className='event'>
              <OutlineText text='PHOTOGRAPHY' size='250%' color='white' />
            </div>
            <div className='event'>
              <OutlineText text='SPECIALS' size='450%' color='#FF6DF0' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
