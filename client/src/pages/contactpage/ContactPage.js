import React from 'react';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './ContactPage.scss';

export default () => {
  return (
    <div className='contact_page'>
      <Contact />
      <Footer bgcolor='#2f0B4B' textcolor='white' outlinecolor='#FF6DF0' />
    </div>
  );
};
