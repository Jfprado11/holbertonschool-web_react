// actions to test
import 'jsdom-global/register';

import {
  login,
  logout,
  hideNotificationDrawer,
  displayNotificationDrawer,
  loginRequest,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
} from './uiActionTypes';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('should test the action obj of the login action creator', () => {
  expect(login('jf@test', '123@')).toEqual({
    type: LOGIN,
    user: {
      email: 'jf@test',
      password: '123@',
    },
  });
});

test('should test the action obj of the logout action creator', () => {
  expect(logout()).toEqual({
    type: LOGOUT,
  });
});

test('should test the action obj of the displayNotificationDrawer action creator', () => {
  expect(displayNotificationDrawer()).toEqual({
    type: DISPLAY_NOTIFICATION_DRAWER,
  });
});

test('should test the action obj of the hideNotificationDrawer action creator', () => {
  expect(hideNotificationDrawer()).toEqual({
    type: HIDE_NOTIFICATION_DRAWER,
  });
});

describe('checking the correct use of the function loginRequest that request an API', () => {
  it('should verify that if the API returns the right response inm a failed', () => {
    const store = mockStore({});

    return store.dispatch(loginRequest('jfprad@test', 'testPass')).then(() => {
      const action = store.getActions();
      console.log(action);
      expect(action[1]).toEqual({ type: LOGIN_FAILURE });
    });
  });
});
