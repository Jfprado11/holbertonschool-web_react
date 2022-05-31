import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

import './App.css';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <div className="notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
App.defaultProps = {
  isLoggedIn: false,
};

export default App;
