import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const inialState = {
  notifications: [],
  filter: '',
};

export default function notificationReducer(state = inialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        filter: 'DEFAULT',
        notifications: action.data.map((item) => {
          return {
            ...item,
            isRead: false,
          };
        }),
      };

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((item) => {
          if (item.id !== action.index) return { ...item };
          return { ...item, isRead: true };
        }),
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}
