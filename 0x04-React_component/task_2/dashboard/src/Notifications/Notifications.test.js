import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

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
  expect(wrapper.find('.Notifications').children('p').text()).toBe(
    'Here is the list of notifications',
  );
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
  expect(wrapper.find('.Notifications NotificationItem').at(0).html()).toBe(
    '<li data-priority="default">New course available</li>',
  );
});

describe('check the renderers', () => {
  it('checks that menu is displayed in false', () => {
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

test('Testing if the new methods has been correctly called and with specific message', () => {
  console.log = jest.fn();

  const wrapper = shallow(<Notifications />);
  const spy = jest.spyOn(wrapper.instance(), 'markAsRead');
  wrapper.instance().markAsRead(3);
  expect(spy).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith(
    'Notification 3 has been marked as read',
  );

  jest.restoreAllMocks();
});
