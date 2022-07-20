import { combineReducers } from 'redux';

import courseReducer from '../reducers/courseReducer';
import notificationReducer from '../reducers/notificationReducer';
import uiReducer from '../reducers/uiReducer';

export const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});
