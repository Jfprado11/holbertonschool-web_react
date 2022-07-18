import { Map } from 'immutable';

import { coursesNormalizer } from '../schema/courses';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

export default function courseReducer(state = Map([]), action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(
        coursesNormalizer(
          action.data.map((item) => {
            return {
              ...item,
              isSelected: false,
            };
          }),
        ),
      );

    case SELECT_COURSE:
      return state.setIn(
        ['entities', 'courses', action.index, 'isSelected'],
        true,
      );

    case UNSELECT_COURSE:
      return state.setIn(
        ['entities', 'courses', action.index, 'isSelected'],
        false,
      );

    default:
      return state;
  }
}
