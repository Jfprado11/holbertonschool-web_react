import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

test('Notifications renders without crashing array emppty', () => {
  const wrapper = shallow(<Notifications listNotifications={[]} />);
  expect(wrapper.length).toBe(1);
});
test('Notifications renders without crashing array ', () => {
  const wrapper = shallow(
    <Notifications
      displayDrawer={true}
      listNotifications={[
        { id: 1, type: 'default', value: 'New course available' },
      ]}
    />,
  );
  expect(wrapper.length).toBe(1);
});

test('Notifications renders one item', () => {
  const wrapper = shallow(
    <Notifications
      displayDrawer={true}
      listNotifications={[
        { id: 1, type: 'default', value: 'New course available' },
      ]}
    />,
  );
  expect(wrapper.find('NotificationItem').length).toBe(1);
});

test('Notifications renders the text', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});

test('Notificationsitem renders the text', () => {
  const wrapper = shallow(
    <Notifications
      displayDrawer={true}
      listNotifications={[
        { id: 1, type: 'default', value: 'New course available' },
      ]}
    />,
  );
  expect(wrapper.find('NotificationItem').at(0).html()).toMatch(
    /<li data-priority="default" class="default.+?">New course available<\/li>/,
  );
});

describe('check the renderers', () => {
  it('checks that menu is displayed in false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div').at(0).length).toBe(1);
  });

  it('checks that Notifications is not displayed in false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').length).toBe(0);
  });

  it('checks tha menu is displayed in true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div').at(0).length).toBe(1);
  });

  it('checks that notifications is displayed in true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div').at(1).length).toBe(1);
  });
});

test('Testing if the new methods has been correctly called and with specific message', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  const wrapper = shallow(<Notifications />);
  const spy = jest.spyOn(wrapper.instance(), 'markAsRead');
  wrapper.instance().markAsRead(3);
  expect(spy).toHaveBeenCalled();
  expect(consoleSpy).toHaveBeenCalledWith(
    'Notification 3 has been marked as read',
  );

  consoleSpy.mockRestore();
});

test('checks if the function handleDisplayDrawer was called when clicked', () => {
  const handleDisplayDrawer = jest.fn();

  const wrapper = shallow(
    <Notifications handleDisplayDrawer={handleDisplayDrawer} />,
  );
  wrapper.find('div').at(0).simulate('click');
  expect(handleDisplayDrawer).toHaveBeenCalled();
});

test('checks if the function handleHideDrawer was called when clicked', () => {
  const handleHideDrawer = jest.fn();

  const wrapper = shallow(
    <Notifications handleHideDrawer={handleHideDrawer} displayDrawer={true} />,
  );
  wrapper.find('button').simulate('click');
  expect(handleHideDrawer).toHaveBeenCalled();
});
