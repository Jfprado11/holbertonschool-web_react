import React from 'react';
import { shallow } from 'enzyme';
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

// test('a div with calss app-header', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('.App-header').length).toBe(1);
// });

// test('a div with calss app-body', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('.App-body').length).toBe(1);
// });

// test('a div with calss app-footer', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('.App-footer').length).toBe(1);
// });
