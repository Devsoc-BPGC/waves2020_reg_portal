import React from 'react';
import './CheckBoxSection.scss';
import CheckBox from '../CheckBox';

export default props => {
  const { heading } = props;
  const { group } = props;
  const { items } = props;
  const checkboxList = items.map(item => {
    return <CheckBox key={item} text={item} group={group} id={item} />;
  });
  function oc(e) {
    const section = e.target.parentElement.parentElement.parentElement;
    const prop = 'checkbox-section-closed';
    if (section.classList.contains(prop)) {
      section.classList.remove(prop);
    } else {
      section.classList.add(prop);
    }
  }

  return (
    <div className='checkbox-list-section checkbox-section-closed'>
      <div className='checkbox-list-section-heading'>
        <label htmlFor='dummy-id'>
          {heading}
          <input type='checkbox' onClick={oc} id='dummy-id' />
          <div />
        </label>
      </div>
      <div className='checkbox-list-section-items'>{checkboxList}</div>
    </div>
  );
};
