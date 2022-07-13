import notificationReducer from './notificationReducer';

import {
  MARK_AS_READ,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('Checks all the case for the notification reducer', () => {
  let state;

  it('should check the default state of the notification reducer', () => {
    const expected = {
      notifications: [],
      filter: '',
    };

    state = notificationReducer(undefined, {});
    expect(state).toEqual(state);
  });

  it('should check the FETCH_NOTIFICATIONS_SUCCESS returns the correct data', () => {
    const expected = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    state = notificationReducer(state, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });

    expect(state).toEqual(expected);
  });

  it('should check MARK_AS_READ actiion return the correct data', () => {
    const expected = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    state = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    expect(state).toEqual(expected);
  });

  it('should the check SET_TYPE_FILTER return the correct data', () => {
    const expected = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    state = notificationReducer(state, {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    });

    expect(state).toEqual(expected);
  });
});
