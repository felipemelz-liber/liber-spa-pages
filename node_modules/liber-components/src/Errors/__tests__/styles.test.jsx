import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import {
  DesktopContainer,
  MobileContainer,
  MobileBackground,
} from '../styles';

describe('Testing Errors styles', () => {
  configure({ adapter: new Adapter() });
  it('DesktopContainer Should render correctly', () => {
    const wrapper = shallow(<DesktopContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MobileContainer Should render correctly', () => {
    const wrapper = shallow(<MobileContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MobileBackground Should render correctly', () => {
    const wrapper = shallow(<MobileBackground />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
