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
  expect(wrapper.find('NotificationItem').at(0).html()).toEqual(
    '<li data-priority="default" class="default_1tsdo2i">New course available</li>',
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

// test('should verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
//   const dataValues = [
//     { id: 1, type: 'default', value: 'New course available' },
//     { id: 2, type: 'urgent', value: 'New course available' },
//   ];

//   const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
//   const wrapper = mount(<Notifications listNotifications={dataValues} />);
//   console.log();
//   expect(spy).toHaveBeenCalled();
// });
