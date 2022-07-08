import {
  login,
  logout,
  hideNotificationDrawer,
  displayNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

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
