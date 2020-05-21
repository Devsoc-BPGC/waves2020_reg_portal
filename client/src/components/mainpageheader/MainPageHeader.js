// cSpell: disable
import React from 'react';
import './MainPageHeader.scss';
import MenuButton from '../microcomponents/OutlineText';
import fbLogo from '../../imageassets/fbLogo.png';
import instaLogo from '../../imageassets/instaLogo.png';

export default () => {
  return (
    <div className='main-page-header'>
      <div className='main-page-header-main-text'>
        <div>
          <span>WA</span>
          <span>VES</span>
          <span>{/* this is essential for mobile displays */}</span>
        </div>

        <div>{/* this is essential for mobile displays */}</div>
      </div>

      <div className='main-page-day-date'>
        <span>30th Oct</span>
        <span>to 1st Nov.</span>
      </div>
      <div className='main-page-social-links'>
        <span>
          <a href='#/' target='blank'>
            <img src={fbLogo} alt='fb link' />
          </a>
        </span>
        <span>
          <a href='#/' target='blank'>
            <img src={instaLogo} alt='insta link' />
          </a>
        </span>
      </div>
      <div className='main-page-menu-button'>
        <span>
          {/* Add here the PC screen menu button. */}
          <MenuButton text='Menu →' color='#FF6DF0' size='xx-large' />
        </span>
        <span>
          {/* Add here the mobile screen menu button. */}
          <MenuButton
            text='≡'
            color='#FF6DF0'
            size='xx-large'
            weight='0.1rem'
          />
        </span>
      </div>
    </div>
  );
};
