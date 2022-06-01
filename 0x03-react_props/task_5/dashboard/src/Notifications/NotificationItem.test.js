import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Should not crash', () => {
  it('should not crash the app', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.length).toBe(1);
  });
});

describe('checking the proper with props', () => {
  it('should check the proeper for type props', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.prop('data-priority')).toBe('default');
  });

  it('should check the proper for value props', () => {
    const wrapper = shallow(<NotificationItem value={`test`} />);
    expect(wrapper.prop('children')).toBe('test');
  });

  // it('should render the prop html', () => {
  //   const wrapper = shallow(<NotificationItem html={<u>test</u>} />);
  //   expect(wrapper.prop('dangerouslySetInnerHTML')).toBe({
  //     __html: <u>test</u>,
  //   });
  // });
});
