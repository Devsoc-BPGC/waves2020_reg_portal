import React from 'react';
import './Contact.scss';
import Text1 from './text/Text1';
import Text2 from './text/Text2';
import Text3 from './text/Text3';
import config from '../../config/config';

export default () => {
  return (
    <div className='contact'>
      <div className='convener'>
        <Text1 config={config.convener} />
      </div>

      <div className='verticals'>
        <div className='rectangle'>
          <hr />
        </div>
        <div className='vertical_title'>EVENTS</div>
      </div>

      <div className='events'>
        <Text2 config={config.chiefCoordi1} />
        <Text2 config={config.eventHead} />
        <Text2 config={config.operationsHead} />
      </div>

      <div className='verticals'>
        <div className='rectangle'>
          <hr />
        </div>
        <div className='vertical_title'>
          PARTICIPATION &<br />
          PUBLICITY
        </div>
      </div>

      <div className='participation'>
        <Text2 config={config.publicityHead} />
        <Text2 config={config.chiefCoordi2} />
        <Text2 config={config.prHead} />
      </div>

      <div className='verticals'>
        <div className='rectangle'>
          <hr />
        </div>
        <div className='vertical_title'>
          SPONSORSHIP &<br />
          MARKETING
        </div>
      </div>

      <div className='sponsorship'>
        <Text3 config={config.sponsorshipHead1} />
        <Text3 config={config.sponsorshipHead2} />
        <Text3 config={config.foodCoordi} />
        <Text2 config={config.marketingCoordi} />
      </div>
    </div>
  );
};
