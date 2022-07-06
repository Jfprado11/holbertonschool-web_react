import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Should not crash', () => {
  it('should not crash the app', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.length).toBe(1);
  });
});

describe('check it redenders correctly', () => {
  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });
});

describe('check the featured of the diseabled bottom sign up', () => {
  it('should be disabled by default', () => {
    const wrapper = shallow(<Login />);
    console.log(wrapper.debug());
    expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'test' } });
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: 'Test123@' } });
    expect(wrapper.find('input').at(2).prop('disabled')).toBe(false);
  });
});
