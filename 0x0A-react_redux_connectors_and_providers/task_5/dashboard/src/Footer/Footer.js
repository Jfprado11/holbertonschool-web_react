import React from 'react';

import PropTypes from 'prop-types';

import './Footer.css';

import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';

function Footer({ user, isLoggedIn }) {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(false)}
      </p>
      {isLoggedIn && (
        <p>
          <a href="#"> Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

Footer.defaultProps = {
  isLoggedIn: false,
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
    isLoggedIn: state.ui.get('isUserLoggedIn'),
  };
};

export default connect(mapStateToProps)(Footer);
