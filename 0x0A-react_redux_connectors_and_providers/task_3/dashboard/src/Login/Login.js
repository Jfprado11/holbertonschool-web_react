import React from 'react';

import PropTypes from 'prop-types';

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });

    const email = e.target.value;
    const { password } = this.state;
    if (email.length > 0 && password.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    const password = e.target.value;
    const { email } = this.state;
    if (email.length > 0 && password.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.appLogin, styles.small)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.inputs, styles.inputSmall)}>
              <label htmlFor="input-email">Email: </label>
              <input id="input-email" type="email" value={this.state.email} onChange={this.handleChangeEmail} />
            </div>

            <div className={css(styles.inputs, styles.inputSmall)}>
              <label htmlFor="input-password">Password: </label>
              <input
                id="input-password"
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>

            <input
              type="submit"
              className={css(styles.btnSmall)}
              value="OK"
              disabled={this.state.enableSubmit === false}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
};
Login.defaultProps = {
  logIn: function () {},
};

export default Login;
