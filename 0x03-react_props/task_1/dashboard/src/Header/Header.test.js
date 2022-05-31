import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Should not crash', () => {
  it('should not crash the app', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
  });
});

describe('check it redenders correctly', () => {
  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
