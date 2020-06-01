import React from 'react';
import './Text3.scss';
import OutlineText from '../../microcomponents/OutlineText';

export default props => {
  const { config } = props;
  return (
    <div className='text_block3'>
      <div className='block1'>
        <div className='back_text'>
          <div className='size1'>
            <OutlineText
              text={config.btext1}
              size='400%'
              color='#2f0B4B'
              weight='2px'
            />
            <OutlineText
              text={config.btext2}
              size='400%'
              color='#2f0B4B'
              weight='2px'
            />
            <OutlineText
              text={config.btext3}
              size='400%'
              color='#2f0B4B'
              weight='2px'
            />
          </div>
          <div className='size2'>
            <OutlineText
              text={config.btext1}
              size='200%'
              color='#2f0B4B'
              weight='1px'
            />
            <OutlineText
              text={config.btext2}
              size='200%'
              color='#2f0B4B'
              weight='1px'
            />
            <OutlineText
              text={config.btext3}
              size='200%'
              color='#2f0B4B'
              weight='1px'
            />
          </div>
          <div className='size3'>
            <OutlineText
              text={config.btext1}
              size='300%'
              color='#2f0B4B'
              weight='1.5px'
            />
            <OutlineText
              text={config.btext2}
              size='300%'
              color='#2f0B4B'
              weight='1.5px'
            />
            <OutlineText
              text={config.btext3}
              size='300%'
              color='#2f0B4B'
              weight='1.5px'
            />
          </div>
        </div>
        <div className='front_text'>
          <div className='white_text_big'>{config.ftext1}</div>
          <div className='white_text_big'>{config.ftext2}</div>
          <div className='white_text_big'>{config.ftext3}</div>
          <div className='white_text_small'>{config.phone}</div>
          <div className='white_text_small'>{config.email}</div>
        </div>
      </div>
    </div>
  );
};
