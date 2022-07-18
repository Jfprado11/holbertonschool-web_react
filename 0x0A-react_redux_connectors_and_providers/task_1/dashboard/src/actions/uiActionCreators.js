import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

import fetch from 'node-fetch';

function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
}
export const boundLogin = (email, password) => dispatch(login(email, password));

function logout() {
  return { type: LOGOUT };
}

export const boundLogout = () => dispatch(logout());

function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:8080/login-success.json')
      .then((res) => res.json)
      .then((json) => dispatch(loginSuccess()))
      .catch((err) => dispatch(loginFailure()));
  };
}

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginFailure, loginSuccess, loginRequest };
