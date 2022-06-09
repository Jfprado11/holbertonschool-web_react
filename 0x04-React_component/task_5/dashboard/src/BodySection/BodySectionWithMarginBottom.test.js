import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('should render correctly a BodySection component and that the props are passed correctly to the child', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="testing">
      testing test
    </BodySectionWithMarginBottom>,
  );
  expect(wrapper.find('BodySection').length).toBe(1);
  expect(wrapper.find('BodySection').props()).toEqual({
    children: 'testing test',
    title: 'testing',
  });
});
