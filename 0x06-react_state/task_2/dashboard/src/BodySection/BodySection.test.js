import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import BodySection from './BodySection';

test('render correctly its childs and a h2', () => {
  const wrapper = shallow(
    <BodySection title="testing">
      <p>testing child</p>
    </BodySection>,
  );
  expect(wrapper.find('h2').length).toBe(1);
  expect(wrapper.find('h2').text()).toBe('testing');
  expect(wrapper.find('p').length).toBe(1);
  expect(wrapper.find('p').text()).toBe('testing child');
});
