// ==========================================================
//  IMPORTING LIBRARIES
// ==========================================================

import React from 'react';
import Footer from '../../components/footer/Footer';
import Home from '../../components/home/Home';

// ==========================================================
//  EXPORTING APP
// ==========================================================

export default () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Home />
      <Footer />
    </div>
  );
};