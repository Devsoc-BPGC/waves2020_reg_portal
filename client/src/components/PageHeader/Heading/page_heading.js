// cSpell: disable
import React from 'react';
import './page_heading.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class PageHeading extends React.Component {
  render() {
    return (
      <div className='page-heading'>
        <span>
          REG
          <br />
          ISTER
        </span>
      </div>
    );
  }
}
