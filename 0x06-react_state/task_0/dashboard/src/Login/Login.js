import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appLogin: {
    padding: 40,
    height: 25,
  },
  inputs: {
    display: 'inline-block',
  },
  inputSmall: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: 5,
    },
  },
  small: {
    marginBottom: 30,
  },
  btnSmall: {
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appLogin, styles.small)}>
        <p>Login to access the full dashboard</p>

        <div className={css(styles.inputs, styles.inputSmall)}>
          <label htmlFor="input-email">Email: </label>
          <input id="input-email" type="email" />
        </div>

        <div className={css(styles.inputs, styles.inputSmall)}>
          <label htmlFor="input-password">Password: </label>
          <input id="input-password" type="password" />
        </div>

        <button className={css(styles.btnSmall)}>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
