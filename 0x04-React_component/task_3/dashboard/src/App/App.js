import React from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

import './App.css';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New course available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

// function App({ isLoggedIn }) {
//   return (
//     <React.Fragment>
//       <div className="notifications">
//         <Notifications listNotifications={listNotifications} />
//       </div>
//       <div className="App">
//         <Header />
//         {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
//         <Footer />
//       </div>
//     </React.Fragment>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogginOut = this.onLogginOut.bind(this);
  }
  onLogginOut(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onLogginOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onLogginOut);
  }

  render() {
    return (
      <React.Fragment>
        <div className="notifications">
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random text for testing</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
App.defaultProps = {
  isLoggedIn: false,
  logOut: function () {},
};

export default App;