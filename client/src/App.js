import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ContactPage from './pages/contactpage/ContactPage';

export default () => {
  return (
    <Router>
      <div>
        <Route path='/' exact component={HomePage} />
        <Route path='/contact' component={ContactPage} />
      </div>
    </Router>
  );
};
