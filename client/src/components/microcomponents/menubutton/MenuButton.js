import React from 'react';
import Button from '../OutlineText';

export default ({ menuText }) => {
  const _style = `::after{ content: "${{ menuText }}';}`;
  return (
    <div className='general-menu-button' style={_style}>
      <Button color='#FF6DF0' />
    </div>
  );
};
