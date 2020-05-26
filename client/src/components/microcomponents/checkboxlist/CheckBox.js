// cSpell: disable
import React from 'react';
import './CheckBox.scss';

export default props => {
  const { text, group, id } = props;
  function stateDec(e) {
    const label = e.target.parentElement;
    const prop = 'custom-check-box-checked';
    if (label.classList.contains(prop)) {
      label.classList.remove(prop);
    } else {
      label.classList.add(prop);
    }
  }

  return (
    <label className='custom-check-box-container' htmlFor={id}>
      {text}
      <input
        type='checkbox'
        value={id}
        name={group}
        id={id}
        onClick={stateDec}
      />
      <span className='custom-check-box-checkmark' />
    </label>
  );
};
