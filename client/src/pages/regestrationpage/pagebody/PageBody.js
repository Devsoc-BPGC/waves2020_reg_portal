// cSpell: disable
import React from 'react';
import './PageBody.scss';
import TextField from '../../../components/microcomponents/textfield/TextField';
import RadioButtonList from '../../../components/microcomponents/radiobuttonlist/RadioButtonList';
import CheckBoxList from '../../../components/microcomponents/checkboxlist/CheckBoxList';
import CompleteButton from './completebutton/CompleteButton';

export default () => {
  const radioButtonIds = ['Female', 'Male', 'Others'];
  // advisory -- keep the names distinct
  const checkListItems = {
    MUSIC: [
      'Indian Rock',
      'Jukebox',
      'Solonote',
      'Rapsody',
      'Silence of the Amps',
    ],
    DANCE: ['Natyanlaji', 'test1', 'test2', 'test3', 'test4'],
    FASHION: ['test5', 'test6', 'test7', 'test8'],
    DRAMA: ['test12', 'test11', 'test10', 'test9'],
    'FINE ARTS': ['test13', 'test14', 'test15', 'test16'],
    DESIGN: ['test20', 'test19', 'test18', 'test17'],
    'CARPE DICTUM': ['test21', 'test22', 'test23', 'test24'],
    QUIZ: ['test28', 'test27', 'test26', 'test25'],
    PHOTOGRAPHY: ['test29', 'test30', 'test31', 'test32'],
    SPECIALS: ['test36', 'test35', 'test34', 'test33'],
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

  function sendDataToServer(data) {
    // TODO: add the code to send the data
    let success = true;

    // code -> manage success accordingly
    if (data === 'undefined') success = false;

    return success;
  }

  function register() {
    const newRow = document.createElement('div');
    const newDiv = document.createElement('div');
    newRow.classList.add('registration-page-body-row');
    newDiv.classList.add('success-fail-alert');
    newRow.appendChild(newDiv);
    document.querySelector('div.registration-page-body').appendChild(newRow);
    newDiv.innerHTML = 'UNDER PROCESS';

    const data = {};

    document.querySelectorAll('input[type=text]').forEach(element => {
      data[element.name] = element.value;
    });

    data.gender = document.querySelector('input[type=radio]:checked').value;

    checkListHeaders.forEach(header => {
      data[header] = [];
      checkListItems[header].forEach(item => {
        if (document.getElementById(item).checked === true) {
          data[header].push(item);
        }
      });
    });

    if (sendDataToServer(data) === true) {
      // setTimeout is temporary adjustment.
      setTimeout(() => {
        newDiv.innerHTML = 'DONE!!';
      }, 1000);
    } else {
      console.log('failed');
    }
  }

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
          <CompleteButton onclick={register} />
        </div>
      </div>
    </div>
  );
};
