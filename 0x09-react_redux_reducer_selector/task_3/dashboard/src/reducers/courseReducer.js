import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((item) => {
        return {
          ...item,
          isSelected: false,
        };
      });

    case SELECT_COURSE:
      return state.map((item) => {
        if (item.id !== action.index) return { ...item };
        return { ...item, isSelected: true };
      });

    case UNSELECT_COURSE:
      return state.map((item) => {
        if (item.id !== action.index) return { ...item };
        return { ...item, isSelected: false };
      });

    default:
      return state;
  }
}
