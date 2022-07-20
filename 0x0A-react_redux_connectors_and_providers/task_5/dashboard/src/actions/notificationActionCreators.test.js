import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

test('should return a obj expected for the markAsAread action', () => {
  expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
});

test('should return a obj expected for the setNotificationFilter action', () => {
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
    type: SET_TYPE_FILTER,
    filter: NotificationTypeFilters.DEFAULT,
  });
});
