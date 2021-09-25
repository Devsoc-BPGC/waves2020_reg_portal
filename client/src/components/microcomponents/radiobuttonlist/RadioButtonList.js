// cSpell: disable
import React from 'react';
import './RadioButtonList.scss';
import RadioButton from './RadioButton';
import Label from '../OutlineText';

export default props => {
  const { label } = props;
  // const width = props.width;
  const { groupName } = props;
  const { idList } = props;
  const radioList = idList.map(id => {
    return (
      <div key={id}>
        <RadioButton text={id} group={groupName} id={id} />
      </div>
    );
  });

  return (
    <div className='special-radio-button-list'>
      <div className='special-radio-button-list-label'>
        <Label text={label} />
      </div>
      <div className='special-radio-button-list-buttonlist'>{radioList}</div>
    </div>
  );
};
