import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('that App renders without crashing', () => {
  it('should not crash', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });

  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toBe(1);
  });

  it('should contain the Header  component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').children('Header').length).toBe(1);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').children('Login').length).toBe(1);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').children('Footer').length).toBe(1);
  });
});

test('courseList not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('CourseList').length).toBe(0);
});

describe('loggin prop is true', () => {
  it('should verify that login componenet in not rendered', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').length).toBe(0);
  });

  it('should verify that courseList componenet is rendered', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').length).toBe(1);
  });
});

test('checks the keydown event to see if alert happen and a func was called ', () => {
  const events = {};
  const logout = jest.fn();

  document.addEventListener = jest.fn((event, cb) => {
    events[event] = cb;
  });

  alert = jest.fn();

  shallow(<App logOut={logout} />);

  events.keydown({ key: 'h', ctrlKey: true });

  expect(alert).toHaveBeenCalledWith('Logging you out');
  expect(logout).toHaveBeenCalled();

  jest.restoreAllMocks();
});

// test('a div with calss app-body', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('.App-body').length).toBe(1);
// });

// test('a div with calss app-footer', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('.App-footer').length).toBe(1);
// });
