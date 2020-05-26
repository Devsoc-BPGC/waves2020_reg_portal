// cSpell: disable
import React from 'react';
import './PageBody.scss';
import TextField from '../../../components/microcomponents/textfield/TextField';
import RadioButtonList from '../../../components/microcomponents/radiobuttonlist/RadioButtonList';
import CheckBoxList from '../../../components/microcomponents/checkboxlist/CheckBoxList';

export default () => {
  const radioButtonIds = ['Female', 'Male', 'Others'];
  const checkListItems = {
    MUSIC: [
      'Indian Rock',
      'Jukebox',
      'Solonote',
      'Rapsody',
      'Silence of the Amps',
    ],
    DANCE: ['Natyanlaji'],
    FASHION: [],
    DRAMA: [],
    'FINE ARTS': [],
    DESIGN: [],
    'CARPE DICTUM': [],
    QUIZ: [],
    PHOTOGRAPHY: [],
    SPECIALS: [],
  };
  const checkListHeaders = [
    'MUSIC',
    'DANCE',
    'FASHION',
    'DRAMA',
    'FINE ARTS',
    'DESIGN',
    'CARPE DICTUM',
    'QUIZ',
    'PHOTOGRAPHY',
    'SPECIALS',
  ];

  return (
    <div className='registration-page-body'>
      <div className='registration-page-body-row'>
        <div>
          <TextField label='NAME' />
        </div>
        <div>
          <TextField label='COLLEGE' width='20rem' />
        </div>
      </div>
      <div className='registration-page-body-row'>
        <div>
          <RadioButtonList
            label='GENDER'
            groupName='gender'
            idList={radioButtonIds}
          />
        </div>
        <div>
          <TextField label='EMAIL ID' />
        </div>
      </div>
      <div className='registration-page-body-row'>
        <div>
          <CheckBoxList
            label='EVENTS'
            smallLabel='Select all that apply'
            groupName='events'
            headers={checkListHeaders}
            items={checkListItems}
          />
        </div>
        <div>
          <TextField label='PHONE' labelNextLine='NUMBER' />
        </div>
      </div>
    </div>
  );
};
