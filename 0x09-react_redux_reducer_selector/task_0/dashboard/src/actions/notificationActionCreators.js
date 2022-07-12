import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));

export { markAsAread, setNotificationFilter };
