// cSpell: disable
import React from 'react';

import './CheckBoxList.scss';
import Label from '../OutlineText';
import CheckBoxSection from './checkboxsection/CheckBoxSection';

export default props => {
  const { label } = props;
  const { headers } = props;
  const { items } = props;
  const { smallLabel } = props;

  const checkBoxLists = headers.map(sectionHeader => {
    return (
      <CheckBoxSection
        key={sectionHeader}
        heading={sectionHeader}
        group={sectionHeader}
        items={items[sectionHeader]}
      />
    );
  });

  return (
    <div className='special-check-box-list'>
      <div className='special-check-box-list-label'>
        <Label text={label} />
        <div>{smallLabel}</div>
      </div>
      <div className='special-check-box-list-buttonlist'>{checkBoxLists}</div>
    </div>
  );
};
