import React from 'react';
import './EventText.scss';

export default props => {
  const { title, line1, line2 } = props;
  return (
    <div className='event'>
      <div className='title'>{title}</div>
      <div className='item'>
        {line1}
        <br />
        {line2}
      </div>
    </div>
  );
};
