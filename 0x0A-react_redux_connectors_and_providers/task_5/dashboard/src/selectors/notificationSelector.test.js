import {
  getNotifications,
  getUnreadNotifications,
  filterTypeSelected,
} from './notificationSelector';

import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

import notificationReducer from '../reducers/notificationReducer';

describe('test the selected function to see if works as intented', () => {
  let state = notificationReducer(undefined, {
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

  it('should test return the right data the filterTypeSelected', () => {
    const dataselected = filterTypeSelected(state);

    expect(dataselected).toBe('DEFAULT');
  });

  it('should test the retrun of the right data of the getNotifications', () => {
    state = notificationReducer(state, {
      type: 'MARK_AS_READ',
      index: 2,
    });
    const dataSelected = getNotifications(state);

    const expected = {
      [1]: {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      [2]: {
        id: 2,
        isRead: true,
        type: 'urgent',
        value: 'New resume available',
      },
      [3]: {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New data available',
      },
    };
    expect(dataSelected.toJS()).toEqual(expected);
  });

  it('should check the return of the list message entities getUnreadNotifications', () => {
    const expected = {
      [1]: {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      [3]: {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New data available',
      },
    };

    const dataSelected = getUnreadNotifications(state);

    expect(dataSelected.toJS()).toEqual(expected);
  });
});
