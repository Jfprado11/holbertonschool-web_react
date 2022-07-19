import { selectCourse, unSelectCourse } from './courseActionCreators';

test('should return the exact obj action with select', () => {
  expect(selectCourse(1)).toEqual({ type: 'SELECT_COURSE', index: 1 });
});

test('should return the exact obj action with unselect', () => {
  expect(unSelectCourse(1)).toEqual({ type: 'UNSELECT_COURSE', index: 1 });
});
