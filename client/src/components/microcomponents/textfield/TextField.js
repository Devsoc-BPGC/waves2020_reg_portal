// cSpell: disable
import React from 'react';
import './TextField.scss';
import Label from '../OutlineText';

export default props => {
  const { label } = props;
  const { labelNextLine } = props;
  const { width } = props;

  const inputNameProp = label;

  const specialTextFieldLabel1 = (
    <div className='special-text-field-label'>
      <Label text={label} />
    </div>
  );
  let specialTextFieldLabel2;

  if (labelNextLine !== 'undefined') {
    specialTextFieldLabel2 = (
      <div className='special-text-field-label'>
        <Label text={labelNextLine} />
      </div>
    );
  } else {
    specialTextFieldLabel2 = <div />;
  }
  return (
    <div className='special-text-field'>
      {specialTextFieldLabel1}
      {specialTextFieldLabel2}
      <div className='special-text-field-textfield' data-inp={inputNameProp}>
        <input type='text' width={width} name={inputNameProp} />
      </div>
    </div>
  );
};
