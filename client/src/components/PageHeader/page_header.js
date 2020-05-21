import React from 'react';
import './page_header.scss';
import PageHeading from './Heading/page_heading';
import MenuButton from '../PurpleHoloTitledText/PurpleHoloTitledText';

// eslint-disable-next-line react/prefer-stateless-function
export default class PageHeader extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='menu'>
          <MenuButton data='MENU' />
        </div>
        <PageHeading />
      </div>
    );
  }
}
