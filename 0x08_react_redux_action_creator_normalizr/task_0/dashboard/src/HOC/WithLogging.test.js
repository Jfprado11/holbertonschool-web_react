import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

test('check console log was called when mounte and on unmounted with pure html', () => {
  console.log = jest.fn();
  const HocLoggin = WithLogging(() => <p>test</p>);
  const wrapper = mount(<HocLoggin />);
  expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledWith(
    'Component Component is going to unmount',
  );

  jest.restoreAllMocks();
});

test('check with a login component the HOC exact console log output', () => {
  console.log = jest.fn();
  const HocLoggin = WithLogging(Login);
  const wrapper = mount(<HocLoggin />);
  expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledWith(
    'Component Login is going to unmount',
  );

  jest.restoreAllMocks();
});
