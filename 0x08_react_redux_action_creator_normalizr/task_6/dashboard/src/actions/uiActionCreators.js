import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

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

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export { login, logout, displayNotificationDrawer, hideNotificationDrawer };
