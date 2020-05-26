import React from 'react';
import './CheckBoxSection.scss';
import CheckBox from '../CheckBox';

import randomId from '../../RandomIdGenerator';

export default props => {
  const { heading } = props;
  const { group } = props;
  const { items } = props;
  const checkboxList = items.map(item => {
    return <CheckBox key={item} text={item} group={group} id={item} />;
  });

  function oc(e) {
    const section = e.target.parentElement.parentElement.parentElement;
    const sections = section.parentElement.childNodes;
    const prop = 'checkbox-section-closed';
    const toggle = section.classList.contains(prop);

    sections.forEach(eachSection => {
      if (!eachSection.classList.contains(prop)) {
        eachSection.classList.add(prop);
      }
    });

    if (toggle) {
      section.classList.remove(prop);
    }
  }

  const dummyId = randomId();

  return (
    <div className='checkbox-list-section checkbox-section-closed'>
      <div className='checkbox-list-section-heading'>
        <label htmlFor={dummyId}>
          <span>{heading}</span>
          <input type='checkbox' onClick={oc} id={dummyId} />
        </label>
      </div>
      <div className='checkbox-list-section-items'>{checkboxList}</div>
    </div>
  );
};
