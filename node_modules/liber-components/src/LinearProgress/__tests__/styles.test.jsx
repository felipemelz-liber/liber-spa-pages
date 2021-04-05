import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { BackgroundBar, DeterminateBar, IndeterminateBar } from '../styles';


describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });
  it('BackgroundBar shold render correctly', () => {
    const wrapper = shallow(<BackgroundBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Checkbox shold render correctly with props', () => {
    const props = {
      background: '#000',
      size: 50,
    };
    const wrapper = shallow(<DeterminateBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Checkbox shold render correctly without props', () => {
    const wrapper = shallow(<DeterminateBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('IndeterminateBar shold render correctly with props', () => {
    const props = {
      background: '#000',
    };
    const wrapper = shallow(<IndeterminateBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('IndeterminateBar shold render correctly without props', () => {
    const wrapper = shallow(<IndeterminateBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
