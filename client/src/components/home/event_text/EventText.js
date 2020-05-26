import React from 'react';
import './EventText.scss';

export default props => {
  const { title, line1, line2, top, left } = props;
  return (
    <div className='event'>
      <div className='block'>
        <div className='title' style={{ top: top, left: left }}>
          {title}
        </div>
        <div className='item'>
          {line1}
          <br />
          {line2}
        </div>
      </div>
    </div>
  );
};
