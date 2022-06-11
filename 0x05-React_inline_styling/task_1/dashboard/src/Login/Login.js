import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appLogin: {
    padding: 40,
    height: 25,
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appLogin)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="input-email">Email: </label>
        <input id="input-email" type="email" />
        <label htmlFor="input-password">Password: </label>
        <input id="input-password" type="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
