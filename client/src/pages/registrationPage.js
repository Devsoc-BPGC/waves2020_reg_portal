import React from 'react';
// import PageHeader from '../components/PageHeader/page_header';
import PageBody from '../components/PageBody/page_body';
import MainPageHeader from '../components/MainPageHeader/main_page_header';

// eslint-disable-next-line react/prefer-stateless-function
export default class RegistrationPage extends React.Component {
  render() {
    return (
      <div>
        {/* <PageHeader /> */}
        <MainPageHeader />
        <PageBody />
      </div>
    );
  }
}
