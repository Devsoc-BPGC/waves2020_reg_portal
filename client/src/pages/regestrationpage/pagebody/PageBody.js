// cSpell: disable
import React, { useState } from 'react';
import './PageBody.scss';
import axios from 'axios';
import TextField from '../../../components/microcomponents/textfield/TextField';
import RadioButtonList from '../../../components/microcomponents/radiobuttonlist/RadioButtonList';
import CheckBoxList from '../../../components/microcomponents/checkboxlist/CheckBoxList';
import CompleteButton from './completebutton/CompleteButton';

export default () => {
  const radioButtonIds = ['Female', 'Male', 'Others'];
  const inProcess = 1000;
  const doneDuration = 1000;
  const noteDuration = 13000;

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
    FINE_ARTS: ['test13', 'test14', 'test15', 'test16'],
    DESIGN: ['test20', 'test19', 'test18', 'test17'],
    CARPE_DICTUM: ['test21', 'test22', 'test23', 'test24'],
    QUIZ: ['test28', 'test27', 'test26', 'test25'],
    PHOTOGRAPHY: ['test29', 'test30', 'test31', 'test32'],
    SPECIALS: ['test36', 'test35', 'test34', 'test33'],
  };
  const checkListHeaders = [
    'MUSIC',
    'DANCE',
    'FASHION',
    'DRAMA',
    'FINE_ARTS',
    'DESIGN',
    'CARPE_DICTUM',
    'QUIZ',
    'PHOTOGRAPHY',
    'SPECIALS',
  ];

  function sendDataToServer(data) {
    console.log(data);
    axios
      .post('https://murmuring-inlet-28815.herokuapp.com/register', {
        college: data.COLLEGE,
        name: data.NAME,
        email: data.EMAIL,
        phone: data.PHONE,
        city: data.CITY,
        year: data.YEAR,
        gender: data.GENDER,
        selectedEvents: [
          ...data.MUSIC,
          ...data.DANCE,
          ...data.FINE_ARTS,
          ...data.CARPE_DICTUM,
          ...data.FASHION,
          ...data.DRAMA,
          ...data.DESIGN,
          ...data.SPECIALS,
          ...data.QUIZ,
          ...data.PHOTOGRAPHY,
        ],
      })
      .then(function (response) {
        console.log(response);
        alert('Your Data has been saved');
      })
      .catch(function (error) {
        console.log(error);
      });

    // TODO: add the code to send the data
    let success = true;
    // code -> manage success accordingly
    if (data === 'undefined') success = false;

    return success;
  }
  const [doneDivState, setDoneDivState] = useState('UNDER PROCESS');
  const [renderDiv, setRenderDiv] = useState(false);
  function register() {
    setRenderDiv(true);
    const data = {};

    document.querySelectorAll('input[type=text]').forEach(element => {
      data[element.name] = element.value;
    });

    data.GENDER = document.querySelector('input[type=radio]:checked').value;

    checkListHeaders.forEach(header => {
      data[header] = [];
      checkListItems[header].forEach(item => {
        if (document.getElementById(item).checked === true) {
          data[header].push(item);
        }
      });
    });
    if (sendDataToServer(data) === true) {
      setTimeout(() => {
        setDoneDivState('DONE!!');
      }, inProcess);
      setTimeout(() => {
        setDoneDivState(
          `If you wish to make change to your registration, then you can reregister. 
          Only the most recent registration data from your email will be considered.`
        );
      }, inProcess + doneDuration);

      setTimeout(() => {
        setRenderDiv(false);
      }, inProcess + doneDuration + noteDuration);
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
          <TextField label='EMAIL' />
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
      {renderDiv && <DoneDiv text={doneDivState} />}
    </div>
  );
};

function DoneDiv(props) {
  const { text } = props;
  return (
    <div className='registration-page-body-row'>
      <div className='success-fail-alert'>{text}</div>
    </div>
  );
}
