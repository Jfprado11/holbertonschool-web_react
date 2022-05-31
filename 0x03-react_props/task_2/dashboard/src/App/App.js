import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
