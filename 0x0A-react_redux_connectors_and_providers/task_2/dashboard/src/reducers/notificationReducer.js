import { Map } from 'immutable';

import { notificationsNormalizer } from '../schema/notifications';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const inialState = Map({
  notifications: [],
  filter: '',
});

export default function notificationReducer(state = inialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge({
        filter: 'DEFAULT',
        notifications: notificationsNormalizer(
          action.data.map((item) => {
            return {
              ...item,
              isRead: false,
            };
          }),
        ),
      });

    case MARK_AS_READ:
      return state.setIn(
        ['notifications', 'entities', 'notifications', action.index, 'isRead'],
        true,
      );
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
