import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Label, Icon } from '../styles';

describe('Test for ActionButton Styles', () => {
  configure({ adapter: new Adapter() });
  it('should render Label correctly without props', () => {
    const wrapper = shallow(<Label />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Label correctly with props', () => {
    const props = {
      size: '100px',
      hover: true,
    };
    const wrapper = shallow(<Label {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Icon correctly without props', () => {
    const wrapper = shallow(<Icon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Icon correctly with props', () => {
    const props = {
      hover: true,
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
