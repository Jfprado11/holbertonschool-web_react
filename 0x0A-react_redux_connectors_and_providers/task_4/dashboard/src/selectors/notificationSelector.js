import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => {
  return Map(state.getIn(['notifications', 'entities', 'notifications']));
};

export const getUnreadNotifications = (state) => {
  const data = Map(state.getIn(['notifications', 'entities', 'notifications']));
  return data.filter((item) => item.isRead === false);
};
