import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.length).toBe(1);
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem').length).toBe(3);
});

test('Notifications renders the text', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.children('p').text()).toBe(
    'Here is the list of notifications',
  );
});

test('Notificationsitem renders the text', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem').at(0).html()).toBe(
    '<li data-priority="default">New course available</li>',
  );
});
