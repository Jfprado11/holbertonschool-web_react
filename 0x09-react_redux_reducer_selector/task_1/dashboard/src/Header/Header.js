import React from 'react';

import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_Logo.jpg';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  appHeader: {
    borderBottom: '4px red solid',
    display: 'flex',
    alignItems: 'center',
  },
  appHeaderImg: {
    display: 'inline-block',
  },
  appHeaderHeading: {
    color: 'red',
  },
});

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    return (
      <React.Fragment>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appHeaderImg)} alt="logo" />
          <h1 className={css(styles.appHeaderHeading)}>School dashboard</h1>
        </header>
        {user.isLoggedIn === true && (
          <section id="logoutSection">
            Welcome {user.email} <span onClick={logOut}>(logout)</span>
          </section>
        )}
      </React.Fragment>
    );
  }
}
Header.contextType = AppContext;

export default Header;
