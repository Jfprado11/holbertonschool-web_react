import React from 'react';

// import './Header.css';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_Logo.jpg';

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

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appHeaderImg)} alt="logo" />
      <h1 className={css(styles.appHeaderHeading)}>School dashboard</h1>
    </header>
  );
}

export default Header;
