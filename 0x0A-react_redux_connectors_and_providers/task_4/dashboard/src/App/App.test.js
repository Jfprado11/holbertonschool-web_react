import 'jsdom-global/register';
import React from 'react';
import { fromJS } from 'immutable';
import { mount, shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { connect, Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import uiReducer from '../reducers/uiReducer';

const store = createStore(uiReducer);

StyleSheetTestUtils.suppressStyleInjection();

describe('that App renders without crashing', () => {
  it('should not crash', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.length).toBe(1);
  });

  it('should contain the Notifications component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.find('Notifications').length).toBe(1);
  });

  it('should contain the Header  component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    console.log(wrapper.debug());
    expect(wrapper.find('div').at(2).children('Header').length).toBe(1);
  });

  it('should contain the Login component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.find('div').at(2).children('BodySectionWithMarginBottom').find('Login').length).toBe(1);
  });

  it('should contain the Footer component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.find('div').at(2).children('Footer').length).toBe(1);
  });
});

test('courseList not displayed', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(wrapper.find('CourseList').length).toBe(0);
});

// describe('loggin prop is true', () => {
//   it('should verify that login componenet in not rendered', () => {
//     const wrapper = shallow(<App />);
//     wrapper.setState({
//       user: {
//         email: 'jfpc11@misena.edu.co',
//         password: '123@',
//         isLoggedIn: true,
//       },
//     });
//     expect(wrapper.find('Login').length).toBe(0);
//   });

//   // it('should verify that courseList componenet is rendered', () => {
//   //   const wrapper = shallow(<App />);
//   //   wrapper.setState({
//   //     user: {
//   //       email: 'jfpc11@misena.edu.co',
//   //       password: '123@',
//   //       isLoggedIn: true,
//   //     },
//   //   });
//   //   expect(wrapper.find('CourseList').length).toBe(1);
//   // });
// });

// test('checks the keydown event to see if alert happen and a func was called ', () => {
//   const events = {};
//   const logout = jest.fn();

//   document.addEventListener = jest.fn((event, cb) => {
//     events[event] = cb;
//   });

//   alert = jest.fn();

//   const wrapper = shallow(<App />);
//   wrapper.setState({
//     user: {
//       email: 'jfpc11@misena.edu.co',
//       password: '123@',
//       isLoggedIn: true,
//     },
//     logOut: logout,
//   });

//   events.keydown({ key: 'h', ctrlKey: true });

//   expect(alert).toHaveBeenCalledWith('Logging you out');
//   expect(logout).toHaveBeenCalled();

//   jest.restoreAllMocks();
// });

// test('logIn update correctly', () => {
//   const wrapper = shallow(<App />);
//   const instance = wrapper.instance();
//   instance.logIn('hola', '123');
//   expect(wrapper.state('user')).toEqual({
//     email: 'hola',
//     password: '123',
//     isLoggedIn: true,
//   });
// });

// test('logOut update correctly', () => {
//   const wrapper = shallow(<App />);
//   const instance = wrapper.instance();
//   instance.logIn('hola', '123');
//   instance.logOut();
//   expect(wrapper.state('user')).toEqual({
//     email: '',
//     password: '',
//     isLoggedIn: false,
//   });
// });

// test('verify the new markNotificationAsRead removes the data from state', () => {
//   const data = [
//     { id: 1, type: 'default', value: 'New course available' },
//     { id: 2, type: 'urgent', value: 'New course available' },
//   ];
//   const wrapper = shallow(<App />);
//   wrapper.setState({ listNotifications: data });
//   expect(wrapper.state('listNotifications').length).toBe(2);
//   wrapper.instance().markNotificationAsRead(1);
//   expect(wrapper.state('listNotifications').length).toBe(1);
// });

test('test the map function to return the correct state', () => {
  const state = fromJS({
    isUserLoggedIn: true,
    isNotificationDrawerVisible: false,
  });
  const getData = mapStateToProps(state);

  expect(getData.isLoggedIn).toBe(true);
  expect(getData.displayDrawer).toBe(false);
});
