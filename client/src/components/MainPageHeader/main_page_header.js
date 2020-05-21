// cSpell: disable
import React from 'react';
import './main_page_header.scss';
import fbLogo from '../../image_assets/fbLogo.png';
import instaLogo from '../../image_assets/instaLogo.png';

// eslint-disable-next-line react/prefer-stateless-function
export default class PageHeader extends React.Component {
  render() {
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
            <img src={fbLogo} alt='fb logo' />
          </span>
          <span>
            <img src={instaLogo} alt='insta logo' />
          </span>
        </div>
        <div className='main-page-menu-button'>
          <span>
            {/* Add here the PC screen menu button. */}
            Menu =&gt;
          </span>
          <span>{/* Add here the mobile screen menu button. */}≡</span>
        </div>
      </div>
    );
  }
}
