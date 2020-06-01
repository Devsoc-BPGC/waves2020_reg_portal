import React from 'react';
import './MobileEvents.scss';
import OutlineText from '../../microcomponents/OutlineText';

export default props => {
  const { config } = props;
  return (
    <div>
      <div className='event1'>
        <OutlineText text='DANCE' size={config[0]} color='white' />
      </div>

      <div className='event1'>
        <OutlineText text='MUSIC' size={config[1]} color='#FF6DF0' />
      </div>

      <div className='event1'>
        <OutlineText text='FASHION' size={config[2]} color='white' />
      </div>

      <div className='event1'>
        <OutlineText text='DRAMA' size={config[3]} color='#FF6DF0' />
      </div>

      <div className='event1'>
        <OutlineText text='FINE ARTS' size={config[4]} color='white' />
      </div>

      <div className='event1'>
        <OutlineText text='DESIGN' size={config[5]} color='#FF6DF0' />
      </div>

      <div className='event1'>
        <OutlineText text='CARPEDICTUM' size={config[6]} color='white' />
      </div>

      <div className='event1'>
        <OutlineText text='QUIZ' size={config[7]} color='#FF6DF0' />
      </div>

      <div className='event1'>
        <OutlineText text='PHOTOGRAPHY' size={config[8]} color='white' />
      </div>

      <div className='event1'>
        <OutlineText text='SPECIALS' size={config[9]} color='#FF6DF0' />
      </div>
    </div>
  );
};
