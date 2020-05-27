// cSpell: disable
import React from 'react';
import './CompleteButton.scss';
import BigText from '../../../../components/commonpageheader/heading/PageHeading';
import Arrow from '../../../../imageassets/arrow.svg';

export default () => {
  return (
    <div className='registration-page-complete-button'>
      <div /> {/* background */}
      <div>
        <BigText part1='COMP' part2='LETE' />
      </div>
      <div>
        <img src={Arrow} alt='abc' />
      </div>
    </div>
  );
};
