import React from 'react';
import OutlineText from '../../components/microcomponents/OutlineText';

import './underconstruction.css';

function UnderConstruction() {
  return (
    <div className='construction__textcontainer'>
      <OutlineText
        text='UNDER CONSTRUCTION'
        size='7vw'
        className='construction__text'
      />
    </div>
  );
}

export default UnderConstruction;
