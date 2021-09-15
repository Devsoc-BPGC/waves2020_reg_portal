import React from 'react';
import './CommonPageHeader.scss';
import PageHeading from './heading/PageHeading';
import WavesLogo from '../../imageassets/wavesLogoFull.png';
// import MenuButton from '../microcomponents/OutlineText';

export default ({ heading1, heading2 }) => {
  return (
    <div className='commonPageHeader'>
      <div className='commonPageHeader-menu'>
        {/* <MenuButton color='#FF6DF0' /> */}
      </div>
      <PageHeading part1={heading1} part2={heading2} />

      <img src={WavesLogo} alt='WavesLogo' className='WavesLogo' />
    </div>
  );
};
