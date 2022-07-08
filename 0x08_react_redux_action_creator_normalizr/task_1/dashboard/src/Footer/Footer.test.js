import 'jsdom-global/register';

import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Should not crash', () => {
  it('should not crash the app', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
  });
});

describe('check it redenders correctly', () => {
  it('should render img and h1 tags', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('p').at(0).text()).toMatch(/(Copyright){1}/);
  });
});

describe('check the new paragraph', () => {
  it('sholud not displayed when the user is logged out within the context', () => {
    const user = { email: '', password: '', isLoggedIn: false };
    const wrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>,
    );

    expect(wrapper.find('p').length).toBe(1);
  });
  it('sholud  displayed when the user is logged in within the context', () => {
    const user = { email: 'jfpc1@misena', password: '12', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>,
    );
    expect(wrapper.find('p').length).toBe(2);
  });
});
