import { Map } from 'immutable';

import { notificationsNormalizer } from '../schema/notifications';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from '../actions/notificationActionTypes';

const inialState = Map({
  notifications: {},
  filter: '',
  loading: false,
});

export default function notificationReducer(state = inialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
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

    case SET_LOADING_STATE:
      return state.set('loading', action.loading);

    case MARK_AS_READ:
      return state.setIn(['notifications', 'entities', 'notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
