import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Switch from '../Switch';
import { Container } from '../Switch.styles';

describe('Switch component tests', () => {
  configure({ adapter: new Adapter() });

  const onChange = sinon.spy();
  afterEach(() => {
    onChange.resetHistory();
  });
  afterAll(() => {
    onChange.restore();
  });

  it('should render Switch component correctly without props', () => {
    const wrapper = shallow(<Switch />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Switch component correctly with checked prop', () => {
    const wrapper = shallow(<Switch checked />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onChange with true when current state is unchecked', () => {
    const wrapper = shallow(<Switch checked={false} onChange={onChange} />);
    const container = wrapper.find(Container);
    container.simulate('click');

    expect(onChange.calledWith(true)).toBeTruthy();
  });

  it('should call onChange with false when current state is checked', () => {
    const wrapper = shallow(<Switch checked onChange={onChange} />);
    const container = wrapper.find(Container);
    container.simulate('click');

    expect(onChange.calledWith(false)).toBeTruthy();
  });
});
