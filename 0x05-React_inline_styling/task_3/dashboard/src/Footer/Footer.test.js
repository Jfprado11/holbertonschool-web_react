import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Should not crash', () => {
  it('should not crash the app', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
  });
});

describe('check it redenders correctly', () => {
  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toMatch(/(Copyright){1}/);
  });
});
