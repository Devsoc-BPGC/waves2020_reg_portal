import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
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
            <div>
              <Link to='/construction' className='footer__links'>
                DANCE
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                MUSIC
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                DRAMA
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                FASHION
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                FINE ARTS
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                CARPE DICTUM
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                DESIGN
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                QUIZ
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                PHOTOGRAPHY
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                SPECIALS
              </Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='head'>NAVIGATION:</div>
          <br />
          <br />
          <div className='list'>
            <div>
              <Link to='/construction' className='footer__links'>
                HOME
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                EVENTS
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                REGISTER
              </Link>
            </div>
            <div>
              <Link to='/construction' className='footer__links'>
                CONTACT
              </Link>
            </div>
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
      {/* <div className='end'>
        {' '}
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by DEVSOC
      </div> */}
    </div>
  );
};
