// cSpell: disable

import React from 'react';
import PageHeader from '../../components/commonpageheader/CommonPageHeader';
// import MainPageHeader from '../../components/mainpageheader/MainPageHeader';
import PageBody from './pagebody/PageBody';
import Footer from '../../components/footer/Footer';

export default () => {
  return (
    <div>
      <PageHeader heading1='REG' heading2='ISTER' />
      {/* <MainPageHeader /> */}
      <PageBody />
      <Footer />
    </div>
  );
};
