import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.length).toBe(1);
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('NotificationItem').length).toBe(3);
});

test('Notifications renders the text', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('.Notifications').children('p').text()).toBe(
    'Here is the list of notifications',
  );
});

test('Notificationsitem renders the text', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('.Notifications NotificationItem').at(0).html()).toBe(
    '<li data-priority="default">New course available</li>',
  );
});

describe('check the renderers', () => {
  it('checks tha menu is displayed in false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('checks that Notifications is not displayed in false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').length).toBe(0);
  });

  it('checks tha menu is displayed in true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('checks that notifications is displayed in true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').length).toBe(1);
  });
});
