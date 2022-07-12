import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('testinmg a table', () => {
  it('should redner witput crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.length).toBe(1);
  });

  it('renders 5 differents rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(2);
  });
});
