import uiReducer from './uiReducer';

test('verify the initial state is correct', () => {
  const expected = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  const stateData = uiReducer(undefined, {});
  expect(stateData).toEqual(expected);
});

test('verify function equals the initial state when the action SELECT_COURSE', () => {
  const expected = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  const action = { type: 'SELECT_COURSE' };

  const stateData = uiReducer(undefined, action);
  expect(stateData).toEqual(expected);
});

test('verify the initial state is correct', () => {
  const expected = {
    isNotificationDrawerVisible: true,
    isUserLoggedIn: false,
    user: {},
  };

  const action = {
    type: 'DISPLAY_NOTIFICATION_DRAWER',
  };

  const stateData = uiReducer(undefined, action);
  expect(stateData).toEqual(expected);
});
