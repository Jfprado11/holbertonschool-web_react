import React from 'react';

import './Footer.css';

import { getFullYear, getFooterCopy } from '../utils/utils';

function footer() {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(false)}
      </p>
    </footer>
  );
}

export default footer;
