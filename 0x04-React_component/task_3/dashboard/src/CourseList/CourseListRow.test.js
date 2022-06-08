import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('testing the props of the th', () => {
  it('should have a props colSpan isHeader set to true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="hola" />,
    );
    expect(wrapper.childAt(0).prop('colSpan')).toBe('2');
    expect(wrapper.children().length).toBe(1);
  });

  it('should create two cells isHeader set to true', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="hola"
        textSecondCell="hola otra vez"
      />,
    );
    expect(wrapper.children().length).toBe(2);
  });

  it('should create two cells isHeader set to false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="hola" textSecondCell="hola otra vez" />,
    );
    expect(wrapper.contains(<td>hola</td>)).toBe(true);
    expect(wrapper.contains(<td>hola otra vez</td>)).toBe(true);
  });
});
