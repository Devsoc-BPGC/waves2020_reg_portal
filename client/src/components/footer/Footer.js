import React from 'react';
import './Footer.scss';
import OutlineText from '../microcomponents/OutlineText';

export default () => {
  return (
    <div className='footer'>
      <div className='top'>
        <OutlineText color='white' text='DETAILS' size='700%' />
        <div className='right'>
          <OutlineText
            color='white'
            text='WAVES21'
            size='175%'
            weight='0.75px'
          />
        </div>
      </div>
      <div className='footer_info'>
        <div className='col'>
          <div className='head'>EVENTS:</div>
          <br />
          <br />
          <div className='list'>
            <div>DANCE</div>
            <div>MUSIC</div>
            <div>DRAMA</div>
            <div>FASHION</div>
            <div>FINE ARTS</div>
            <div>CARPE DICTUM</div>
            <div>DESIGN</div>
            <div>QUIZ</div>
            <div>PHOTOGRAPHY</div>
            <div>SPECIALS</div>
          </div>
        </div>
        <div className='col'>
          <div className='head'>NAVIGATION:</div>
          <br />
          <br />
          <div className='list'>
            <div>HOME</div>
            <div>EVENTS</div>
            <div>REGISTER</div>
            <div>CONTACT</div>
          </div>
        </div>
        <div className='col'>
          <div className='head'>LOCATION:</div>
          <br />
          <br />
          <div className='list'>
            <div>
              <div>
                BITS, Pilani, K.K. Birla-
                <br /> Goa Campus, NH - 17B
                <br /> Bypass Road, Zuarinagar,
                <br /> Goa - 403726.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='end'>
        {' '}
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by DEVSOC
      </div>
    </div>
  );
};
