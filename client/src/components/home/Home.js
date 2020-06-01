import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import DesktopEvents from './desktop_events/DesktopEvents';
import MobileEvents from './mobile_events/MobileEvents';
import config from '../../config/config';

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
        <div className='config'>
          <DesktopEvents config={config.homeDesktop} />
        </div>
        <div className='buttons'>
          <Link
            to='/register'
            style={{ textDecoration: 'none', color: '#2f0B4B' }}
          >
            <div className='button'>Register</div>
          </Link>
          <Link
            to='/contact'
            style={{ textDecoration: 'none', color: '#2f0B4B' }}
          >
            <div className='button'>Contact</div>
          </Link>
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
            <MobileEvents config={config.homeMobile1} />
          </div>

          {/* For screen size less than 400px */}
          <div className='events_small'>
            <MobileEvents config={config.homeMobile2} />
          </div>
        </div>
      </div>
    </div>
  );
};
