import 'jsdom-global/register';

import React from 'react';

import { mount, shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Should not crash', () => {
  it('should not crash the app', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.length).toBe(1);
  });
});

describe('check it redenders correctly', () => {
  it('should render img and h1 tags', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

describe('checks the new context data providers if works as expected', () => {
  it('should not shown new section with default context value', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('should mount the header with specific User and display section logoutSection', () => {
    const user = { email: 'felipe', password: '123', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Header />
      </AppContext.Provider>,
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });
});
