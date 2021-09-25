// cSpell: disable
import React, { useState } from 'react';
import './PageBody.scss';
import axios from 'axios';
import TextField from '../../../components/microcomponents/textfield/TextField';
import RadioButtonList from '../../../components/microcomponents/radiobuttonlist/RadioButtonList';
import CheckBoxList from '../../../components/microcomponents/checkboxlist/CheckBoxList';
import CompleteButton from './completebutton/CompleteButton';

export default () => {
  const [doneDivState, setDoneDivState] = useState(
    'Please wait, registration is under process.'
  );
  const [renderDiv, setRenderDiv] = useState(false);
  const [timeoutQueue, setTimeoutQueue] = useState([]);

  const radioButtonIds = ['Female', 'Male', 'Others'];
  const doneDuration = 5000;
  const noteDuration = 13000;

  // advisory -- keep the names distinct

  const checkListItems = {
    MUSIC: ['Jukebox- Hindi', 'Jukebox- English', 'Reverb', 'Rapsody'],
    DANCE: ['Sizzle', 'Natyanjali'],
    'FASHION & DESIGN': ['Mix-n-Match', 'Makeup Art'],
    DRAMA: ['Hear Me Out', ' Radio Play'],
    'FINE ARTS': ['Picturesque Pallette'],
    'FILM AND PHOTOGRAPHY': ['Oh Snap!', 'Sho(r)t'],
    SPECIALS: ['Show Me The Funny', 'Mr And Mrs Waves', 'InVerse', 'Irshaad'],
  };
  const checkListHeaders = [
    'MUSIC',
    'DANCE',
    'FASHION & DESIGN',
    'DRAMA',
    'FINE ARTS',
    'FILM AND PHOTOGRAPHY',
    'SPECIALS',
  ];

  const sendDataToServer = async data => {
    let success = true;

    await axios
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
          ...data['FINE ARTS'],
          ...data['FASHION & DESIGN'],
          ...data.DRAMA,
          ...data.SPECIALS,
          ...data['FILM AND PHOTOGRAPHY'],
        ],
      })
      .then(response => {
        success = true;
        console.log(response);
      })
      .catch(error => {
        success = false;
        console.log(error);
      });

    if (data == null) success = false;

    return success;
  };

  const register = () => {
    // clear any previous pending timeouts
    try {
      timeoutQueue.forEach(timeoutID => clearTimeout(timeoutID));
    } catch (e) {
      console.log(e);
    }
    setTimeoutQueue([]);

    // reset the message box and show initial message
    setDoneDivState('Please wait, registration is under process.');
    setRenderDiv(true);

    // start data collection
    const data = {};

    document.querySelectorAll('input[type=text]').forEach(element => {
      data[element.name] = element.value;
    });

    data.GENDER = document.querySelector('input[type=radio]:checked')?.value;
    if (data.GENDER !== true) data.GENDER = 'Others';

    checkListHeaders.forEach(header => {
      data[header] = [];
      checkListItems[header].forEach(item => {
        if (document.getElementById(item).checked === true) {
          data[header].push(item);
        }
      });
    });

    sendDataToServer(data)
      .then(res => {
        if (res === true) {
          // setup timeout message IDs
          let messageTimeoutID = -1;
          let revertTimeoutID = -1;

          // give messages

          setRenderDiv(true);
          setDoneDivState('Successfully registered.');
          messageTimeoutID = setTimeout(() => {
            setDoneDivState(
              `If you wish to make change to your registration, then you can reregister. ` +
                `Only the most recent registration data from your email will be considered.`
            );
          }, doneDuration);

          // after the messages are given, we revert the message box to original state
          revertTimeoutID = setTimeout(() => {
            setTimeout(() => {
              setDoneDivState('Please wait, registration is under process.');
              setRenderDiv(false);
            }, doneDuration + noteDuration);
          });

          // add the timeoutIDs to the timeoutQueue
          setTimeoutQueue(thisTimeoutQueue => {
            thisTimeoutQueue.push(messageTimeoutID);
            thisTimeoutQueue.push(revertTimeoutID);
          });
        } else {
          // show error message
          setRenderDiv(true);
          setDoneDivState(
            'Error in registration. Please check your network connection.'
          );
          let revertTimeoutID = -1;

          // after the messages are given, we revert the message box to original state
          revertTimeoutID = setTimeout(() => {
            setDoneDivState('Please wait, registration is under process.');
            setRenderDiv(false);
          }, doneDuration);

          // add the timeoutIDs to the timeoutQueue
          setTimeoutQueue(thisTimeoutQueue => {
            thisTimeoutQueue.push(revertTimeoutID);
          });
        }
      })
      .catch(err => {
        console.log(err);

        // below code is same as `else` section of the `if` block in the above `then` block

        // show error message
        setRenderDiv(true);
        setDoneDivState(
          'Error in registration. Please check your network connection.'
        );
        let revertTimeoutID = -1;

        // after the messages are given, we revert the message box to original state
        revertTimeoutID = setTimeout(() => {
          setDoneDivState('Please wait, registration is under process.');
          setRenderDiv(false);
        }, doneDuration);

        // add the timeoutIDs to the timeoutQueue
        setTimeoutQueue(thisTimeoutQueue => {
          thisTimeoutQueue.push(revertTimeoutID);
        });
      });
  };

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
          <CompleteButton onclick={() => register()} />
          {renderDiv && <DoneDiv text={doneDivState} />}
        </div>
      </div>
    </div>
  );
};

const DoneDiv = props => {
  const { text } = props;
  return <div className='success-fail-alert'>{text}</div>;
};
