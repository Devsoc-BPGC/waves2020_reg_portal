// cSpell: disable
import React from 'react';
import './PageHeading.scss';

export default ({ part1, part2 }) => {
  return (
    <div className='page-heading'>
      <span>
        {part1}
        <br />
        {part2}
      </span>
    </div>
  );
};
