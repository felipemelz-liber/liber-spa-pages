import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Container, Circle } from '../Switch.styles';

describe('Switch styled component tests', () => {
  configure({ adapter: new Adapter() });

  it('should render switch Container correctly without props', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render switch Container correctly with checked prop', () => {
    const wrapper = shallow(<Container checked />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render switch Circle correctly', () => {
    const wrapper = shallow(<Circle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
