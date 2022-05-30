import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.length).toBe(1);
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(
    wrapper.contains([
      <li data-priority="default">New course available</li>,
      <li data-priority="urgent">New resume available</li>,
    ]),
  ).toBe(true);
});
test('Notifications renders the text', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.children('p').text()).toBe(
    'Here is the list of notifications',
  );
});
