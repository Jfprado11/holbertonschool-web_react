import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('that App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});

test('a div with calss app-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').length).toBe(1);
});

test('a div with calss app-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').length).toBe(1);
});

test('a div with calss app-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').length).toBe(1);
});
