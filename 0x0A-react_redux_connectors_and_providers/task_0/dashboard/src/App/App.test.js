import 'jsdom-global/register';
import React from 'react';
import { fromJS } from 'immutable';
import { mount, shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { connect, Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import uiReducer from '../reducers/uiReducer';

test('test the map function to return the correct state', () => {
  const state = fromJS({
    isUserLoggedIn: true,
  });
  const getData = mapStateToProps(state);

  expect(getData).toEqual({ isLoggedIn: true });
});
