import React from 'react';
import { connect } from 'react-redux';
import { getLatestNotification } from '../utils/utils';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

import AppContext, { user, logOut } from './AppContext';

import { StyleSheet, css } from 'aphrodite';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogginOut = this.onLogginOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: listNotifications,
    };
  }

  markNotificationAsRead(id) {
    const array = this.state.listNotifications;
    const data = array.filter((item) => item.id !== id);
    this.setState({ listNotifications: data });
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  logOut() {
    this.setState({ user });
  }

  onLogginOut(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onLogginOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onLogginOut);
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div className={css(styles.notifications)}>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
        </div>
        <div className={css(styles.app)}>
          <Header />
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random text for testing</p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  notifications: {
    position: 'absolute',
    right: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export const mapStateToProps = (state) => {
  return { isLoggedIn: state.get('isUserLoggedIn') };
};

export default connect(mapStateToProps)(App);
