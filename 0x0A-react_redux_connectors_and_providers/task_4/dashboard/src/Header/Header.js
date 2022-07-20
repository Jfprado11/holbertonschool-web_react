import React from 'react';

import Proptypes from 'prop-types';

import { connect } from 'react-redux';

import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_Logo.jpg';
import { logout } from '../actions/uiActionCreators';

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
    const { user, logout, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appHeaderImg)} alt="logo" />
          <h1 className={css(styles.appHeaderHeading)}>School dashboard</h1>
        </header>
        {isLoggedIn === true && (
          <section id="logoutSection">
            Welcome {user.email} <span onClick={logout}>(logout)</span>
          </section>
        )}
      </React.Fragment>
    );
  }
}

Header.prototypes = {
  user: Proptypes.object,
  isLoggedIn: Proptypes.bool,
  logout: Proptypes.func,
};
Header.defaultProps = {
  user: {},
  isLoggedIn: false,
  logouit: () => {},
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
    isLoggedIn: state.ui.get('isUserLoggedIn'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
