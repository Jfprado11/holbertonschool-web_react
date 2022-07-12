import courseReducer from './courseReducer';

import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('should check all the actions creator for the new reducer', () => {
  let state;
  it('should set state to an empty array', () => {
    state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should FETCH_COURSE_SUCCESS returns the data passed', () => {
    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    state = courseReducer(state, {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],
    });

    expect(state).toEqual(expected);
  });

  it('should SELECT_COURSE returns the data with the right item updated', () => {
    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    state = courseReducer(state, {
      type: SELECT_COURSE,
      index: 2,
    });

    expect(state).toEqual(expected);
  });

  it('should UNSELECT_COURSE returns the data with the right item updated', () => {
    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    state = courseReducer(state, {
      type: UNSELECT_COURSE,
      index: 2,
    });

    expect(state).toEqual(expected);
  });
});
