import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
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
