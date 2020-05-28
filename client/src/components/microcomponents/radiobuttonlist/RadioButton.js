// cSpell: disable
import React from 'react';
import './RadioButton.scss';

export default props => {
  const { text, group, id } = props;
  return (
    <label className='custom-radio-button-container' htmlFor={id}>
      {text}
      <input
        type='radio'
        name={group}
        id={id}
        value={id}
        checked='checked'
        onChange={() => {}}
      />
      <span className='custom-radio-button-checkmark' />
    </label>
  );
};
