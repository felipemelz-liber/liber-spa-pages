import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ActionButton from '../ActionButton';

describe('Test for Action Button', () => {
  configure({ adapter: new Adapter() });
  const props = {
    icon: <div />,
  };
  it('should render correctly', () => {
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when type is primary', () => {
    props.type = 'primary';
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when type is secondary', () => {
    props.type = 'secondary';
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when type is success', () => {
    props.type = 'success';
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when hover', () => {
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    wrapper.simulate('mouseover');
    expect(wrapper.state('hover')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when focus', () => {
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    wrapper.simulate('focus');
    expect(wrapper.state('hover')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change hover when mouseleave', () => {
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    wrapper.setState({ hover: true });
    wrapper.simulate('mouseleave');
    expect(wrapper.state('hover')).toBeFalsy();
  });
  it('should change hover when blur', () => {
    const wrapper = shallow(<ActionButton {...props}>label</ActionButton>);
    wrapper.setState({ hover: true });
    wrapper.simulate('blur');
    expect(wrapper.state('hover')).toBeFalsy();
  });
});
