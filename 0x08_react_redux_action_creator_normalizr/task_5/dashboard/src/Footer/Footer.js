import React from 'react';

import './Footer.css';

import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user, logOut }) => (
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(false)}
          </p>
          {user.isLoggedIn && (
            <p>
              <a href="#"> Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
