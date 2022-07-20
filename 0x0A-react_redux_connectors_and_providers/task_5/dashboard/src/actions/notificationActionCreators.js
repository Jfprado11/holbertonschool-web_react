import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from './notificationActionTypes';

import fetch from 'node-fetch';

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

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading,
  };
}

function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
}

function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('http://localhost:8080/notifications.json')
      .then((data) => data.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => console.error(error))
      .finally(() => dispatch(setLoadingState(false)));
  };
}

export { markAsAread, setNotificationFilter, setLoadingState, setNotifications, fetchNotifications };
