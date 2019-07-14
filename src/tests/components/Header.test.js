import React from 'react';
import { shallow, mount, render } from 'enzyme';
import  Header  from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});



