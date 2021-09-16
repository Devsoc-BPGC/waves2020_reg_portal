import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/loginPage/login';
// import MainPageHeader from './components/mainpageheader/MainPageHeader';
// import Footer from './components/footer/Footer';
import RegistrationPage from './pages/regestrationpage/RegistrationPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <RegistrationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
