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
  const radioList = idList.map(function (id) {
    return (
      // <div key={id}>
      //     <input type="radio" width={width} name={groupName} id={id} value={id} />
      //     <label htmlFor={id}>{id}</label>
      // </div>
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
